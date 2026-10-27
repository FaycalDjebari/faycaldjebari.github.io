#!/usr/bin/env bash
# Builds the public CV (no phone number, no referee details) from the LaTeX
# source and writes it to public/cv/djebari-cv.pdf, the file the site serves.
#
# Usage:  npm run cv -- "/path/to/djebari_cv.tex"
set -euo pipefail

tex="${1:?Usage: npm run cv -- /path/to/djebari_cv.tex}"
[ -f "$tex" ] || { echo "Not found: $tex" >&2; exit 1; }

repo="$(cd "$(dirname "$0")/.." && pwd)"
out="$repo/public/cv/djebari-cv.pdf"
build="$(mktemp -d)"
trap 'rm -rf "$build"' EXIT

cd "$(dirname "$tex")"
name="$(basename "$tex" .tex)"
for _ in 1 2; do
  pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$build" \
    -jobname=public "\def\publicversion{}\input{$name}" >/dev/null \
    || { tail -30 "$build/public.log" >&2; exit 1; }
done

if python3 -c "import pymupdf" 2>/dev/null; then
  text="$(python3 -c 'import sys, pymupdf; print("\n".join(p.get_text() for p in pymupdf.open(sys.argv[1])))' "$build/public.pdf")"
  # Only the owner's own two addresses may appear; any other email (e.g. a
  # referee's) or a phone number means the public switch didn't take effect.
  others="$(grep -oE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+' <<<"$text" \
    | grep -vxE 'faycal\.djebari@univ-bejaia\.dz|fayceldjebari@gmail\.com' || true)"
  if [ -n "$others" ] || grep -q '+213' <<<"$text"; then
    echo "Refusing to publish: the PDF contains a phone number or someone else's email." >&2
    exit 1
  fi
else
  echo "Warning: PyMuPDF not installed (pip3 install pymupdf), so the PDF was not checked for private details." >&2
fi

mkdir -p "$(dirname "$out")"
cp "$build/public.pdf" "$out"
echo "Public CV written to public/cv/djebari-cv.pdf"
