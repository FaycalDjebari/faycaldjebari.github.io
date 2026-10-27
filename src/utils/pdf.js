import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

const documents = new Map();

// pdf.js is ~400 KB, so it's imported on demand instead of in the main bundle.
// The loaded document is cached so the preview and the full viewer share it.
export function loadPdf(url) {
  if (!documents.has(url)) {
    const promise = import("pdfjs-dist").then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
      return pdfjs.getDocument({ url }).promise;
    });
    promise.catch((err) => {
      console.error("Could not load PDF", url, err);
      documents.delete(url);
    });
    documents.set(url, promise);
  }
  return documents.get(url);
}
