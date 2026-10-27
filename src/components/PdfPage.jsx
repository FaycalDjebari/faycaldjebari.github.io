import { useEffect, useRef, useState } from "react";

// PDF user space -> viewport pixels (pdf.js v6 dropped convertToViewportRectangle).
function toViewport(viewport, x, y) {
  const [a, b, c, d, e, f] = viewport.transform;
  return [a * x + c * y + e, b * x + d * y + f];
}

// Renders one PDF page at a given CSS width. Canvas pixels are scaled by the
// device pixel ratio so text stays crisp, and link annotations are overlaid
// as real <a> elements so DOI/ORCID links in the CV remain clickable.
function PdfPage({ pdf, pageNumber, width, withLinks = true }) {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!pdf || !width) return;
    let cancelled = false;
    let task = null;

    (async () => {
      const page = await pdf.getPage(pageNumber);
      if (cancelled) return;
      const viewport = page.getViewport({ scale: width / page.getViewport({ scale: 1 }).width });
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const canvas = canvasRef.current;
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      setSize({ width: viewport.width, height: viewport.height });

      task = page.render({ canvas, viewport, transform: dpr === 1 ? undefined : [dpr, 0, 0, dpr, 0, 0] });
      try {
        await task.promise;
      } catch (err) {
        if (err?.name !== "RenderingCancelledException") throw err;
        return;
      }

      if (!withLinks || cancelled) return;
      const annotations = await page.getAnnotations();
      if (cancelled) return;
      setLinks(
        annotations
          .filter((a) => a.subtype === "Link" && a.url)
          .map((a) => {
            const [x1, y1] = toViewport(viewport, a.rect[0], a.rect[1]);
            const [x2, y2] = toViewport(viewport, a.rect[2], a.rect[3]);
            return {
              url: a.url,
              left: Math.min(x1, x2),
              top: Math.min(y1, y2),
              width: Math.abs(x2 - x1),
              height: Math.abs(y2 - y1),
            };
          })
      );
    })();

    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [pdf, pageNumber, width, withLinks]);

  return (
    <div
      className="pdf-page"
      style={size ? { width: size.width, height: size.height } : { width, aspectRatio: "1 / 1.414" }}
      data-page={pageNumber}
    >
      <canvas ref={canvasRef} style={size ? { width: size.width, height: size.height } : undefined} />
      {links.map((link, i) => (
        <a
          key={i}
          className="pdf-link"
          href={link.url}
          {...(link.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          style={{ left: link.left, top: link.top, width: link.width, height: link.height }}
          aria-label={link.url}
        />
      ))}
    </div>
  );
}

export default PdfPage;
