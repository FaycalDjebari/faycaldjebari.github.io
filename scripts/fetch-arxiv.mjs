// Runs server-side (Node, during build/CI) to avoid arxiv.org's lack of CORS
// support for browser fetches. Output is committed/bundled as static JSON
// and imported directly by src/utils/fetchArxiv.js — no runtime network call.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { XMLParser } from "fast-xml-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../src/data/arxivPapers.json");
const FEED_URL = "https://arxiv.org/a/djebari_f_1.atom";

function toArray(value) {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

async function main() {
  let papers = [];

  try {
    const response = await fetch(FEED_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const xmlText = await response.text();
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
    const parsed = parser.parse(xmlText);
    const entries = toArray(parsed?.feed?.entry);

    papers = entries.map((entry) => {
      const links = toArray(entry.link);
      const htmlLink = links.find((l) => l["@_type"] === "text/html")?.["@_href"];
      const idText = typeof entry.id === "string" ? entry.id : "";

      return {
        title: String(entry.title ?? "Untitled").trim().replace(/\s+/g, " "),
        published: String(entry.published ?? "").trim(),
        summary: String(entry.summary ?? "").trim().replace(/\s+/g, " "),
        link: htmlLink ?? idText ?? "#",
        authors: toArray(entry.author)
          .map((a) => a?.name)
          .filter(Boolean)
          .join(", "),
        arxivId: idText.match(/abs\/(.+)$/)?.[1] ?? "",
      };
    });

    console.log(`Fetched ${papers.length} arXiv paper(s).`);
  } catch (error) {
    console.warn(`arXiv fetch failed (${error.message}); keeping previous data if any.`);
    try {
      const existing = await import(OUTPUT_PATH, { with: { type: "json" } });
      papers = existing.default;
    } catch {
      papers = [];
    }
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(papers, null, 2) + "\n");
}

main();
