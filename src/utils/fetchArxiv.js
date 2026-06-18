export async function fetchArxivPapers() {
  // In dev: go through Vite proxy to avoid CORS
  // In prod: fetch directly (no CORS issue on deployed servers)
  const url = import.meta.env.DEV
    ? "/arxiv-feed/djebari_f_1.atom"
    : "https://arxiv.org/a/djebari_f_1.atom";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const text = await response.text();
    const xml = new DOMParser().parseFromString(text, "application/xml");

    if (xml.querySelector("parsererror")) throw new Error("Failed to parse XML");

    const entries = xml.querySelectorAll("entry");
    console.log("Entries found:", entries.length); // should be > 0

    return Array.from(entries).map((entry) => ({
      title: entry.querySelector("title")?.textContent?.trim() ?? "Untitled",
      published: entry.querySelector("published")?.textContent?.trim() ?? "",
      summary: entry.querySelector("summary")?.textContent?.trim() ?? "",
      link:
        Array.from(entry.querySelectorAll("link"))
          .find((l) => l.getAttribute("type") === "text/html")
          ?.getAttribute("href") ??
        entry.querySelector("id")?.textContent?.trim() ??
        "#",
      authors: Array.from(entry.querySelectorAll("author name"))
        .map((n) => n.textContent.trim())
        .join(", "),
      arxivId:
        entry.querySelector("id")?.textContent?.trim()?.match(/abs\/(.+)$/)?.[1] ?? "",
    }));
  } catch (error) {
    console.error("arXiv fetch error:", error);
    return [];
  }
}