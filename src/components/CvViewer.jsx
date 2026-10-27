import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CvViewer({ open, onClose, pdfPath, downloadName, version }) {
  const closeRef = useRef(null);

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
    };
  }, [open, onClose]);

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
              <div>
                <span className="cv-viewer-title">Curriculum Vitae</span>
                {version && <span className="cv-viewer-version">{version}</span>}
              </div>
              <div className="cv-viewer-actions">
                <a className="cv-viewer-btn is-primary" href={pdfPath} download={downloadName}>
                  Download
                </a>
                <a className="cv-viewer-btn" href={pdfPath} target="_blank" rel="noopener noreferrer">
                  Open in new tab
                </a>
                <button ref={closeRef} type="button" className="cv-viewer-close" onClick={onClose} aria-label="Close viewer">
                  ×
                </button>
              </div>
            </div>
            <iframe className="cv-viewer-frame" src={`${pdfPath}#view=FitH`} title="Curriculum Vitae (PDF)" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CvViewer;
