import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadPdf } from "../utils/pdf";
import PdfPage from "./PdfPage";

const ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2];

function CvViewer({ open, onClose, pdfPath, downloadName, version }) {
  const closeRef = useRef(null);
  const bodyRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState(false);
  const [fitWidth, setFitWidth] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!open) return;
    loadPdf(pdfPath).then(setPdf, () => setError(true));
  }, [open, pdfPath]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      setZoom(1);
      setCurrentPage(1);
    };
  }, [open, onClose]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!open || !body) return;
    const measure = () => setFitWidth(Math.min(body.clientWidth - 32, 900));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(body);
    return () => observer.disconnect();
  }, [open, pdf]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body || !pdf) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrentPage(Number(visible.target.dataset.page));
      },
      { root: body, threshold: [0.25, 0.5, 0.75] }
    );
    body.querySelectorAll(".pdf-page").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pdf, fitWidth, zoom]);

  const zoomIndex = ZOOM_STEPS.indexOf(zoom);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cv-viewer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="cv-viewer"
            role="dialog"
            aria-modal="true"
            aria-label="Curriculum Vitae"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cv-viewer-bar">
              <div className="cv-viewer-heading">
                <span className="cv-viewer-title">
                  <span className="cv-title-long">Curriculum Vitae</span>
                  <span className="cv-title-short">CV</span>
                </span>
                {version && <span className="cv-viewer-version">{version}</span>}
              </div>

              {pdf && (
                <div className="cv-viewer-tools" aria-label="Viewer controls">
                  <span className="cv-viewer-pages" aria-live="polite">
                    {currentPage} / {pdf.numPages}
                  </span>
                  <button
                    type="button"
                    className="cv-tool"
                    onClick={() => setZoom(ZOOM_STEPS[zoomIndex - 1])}
                    disabled={zoomIndex <= 0}
                    aria-label="Zoom out"
                  >
                    −
                  </button>
                  <button type="button" className="cv-tool is-label" onClick={() => setZoom(1)} title="Fit to width">
                    {Math.round(zoom * 100)}%
                  </button>
                  <button
                    type="button"
                    className="cv-tool"
                    onClick={() => setZoom(ZOOM_STEPS[zoomIndex + 1])}
                    disabled={zoomIndex >= ZOOM_STEPS.length - 1}
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                </div>
              )}

              <div className="cv-viewer-actions">
                <a className="cv-viewer-btn is-primary" href={pdfPath} download={downloadName}>
                  Download
                </a>
                <a className="cv-viewer-btn" href={pdfPath} target="_blank" rel="noopener noreferrer">
                  New tab ↗
                </a>
                <button ref={closeRef} type="button" className="cv-viewer-close" onClick={onClose} aria-label="Close viewer">
                  ×
                </button>
              </div>
            </div>

            <div ref={bodyRef} className="cv-viewer-body">
              {error && (
                <p className="cv-viewer-message">
                  The preview couldn't load.{" "}
                  <a href={pdfPath} target="_blank" rel="noopener noreferrer">Open the PDF directly</a>.
                </p>
              )}
              {!error && !pdf && <p className="cv-viewer-message">Loading CV…</p>}
              {pdf &&
                fitWidth > 0 &&
                Array.from({ length: pdf.numPages }, (_, i) => (
                  <PdfPage key={i} pdf={pdf} pageNumber={i + 1} width={Math.round(fitWidth * zoom)} />
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CvViewer;
