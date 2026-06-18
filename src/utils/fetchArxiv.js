import arxivPapers from "../data/arxivPapers.json";

// arxiv.org doesn't send CORS headers, so a browser-side fetch always fails
// in production. Papers are instead fetched server-side at build time by
// scripts/fetch-arxiv.mjs and bundled as static JSON.
export async function fetchArxivPapers() {
  return arxivPapers;
}
