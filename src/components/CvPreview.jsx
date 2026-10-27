import { useEffect, useState } from "react";
import { loadPdf } from "../utils/pdf";
import PdfPage from "./PdfPage";

const THUMB_WIDTH = 220;

function CvPreview({ pdfPath, downloadName, version, onOpen }) {
  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadPdf(pdfPath).then(setPdf, () => setError(true));
  }, [pdfPath]);

  return (
    <div className="cv-preview">
      <button type="button" className="cv-preview-thumb" onClick={onOpen} aria-label="Open the CV viewer">
        {pdf ? (
          <PdfPage pdf={pdf} pageNumber={1} width={THUMB_WIDTH} withLinks={false} />
        ) : (
          <span className="cv-preview-skeleton" style={{ width: THUMB_WIDTH }}>
            {error ? "Preview unavailable" : ""}
          </span>
        )}
        <span className="cv-preview-hover" aria-hidden="true">
          <span className="cv-preview-hover-label">View CV</span>
        </span>
      </button>

      <div className="cv-preview-info">
        <span className="section-eyebrow">Curriculum Vitae · PDF</span>
        <p className="cv-preview-title">Fayçal Djebari</p>
        <p className="cv-preview-meta">
          Version {version}
          {pdf && ` · ${pdf.numPages} pages`}
        </p>
        <div className="cv-preview-actions">
          <button type="button" className="button is-cta" onClick={onOpen}>
            View CV
          </button>
          <a href={pdfPath} download={downloadName} className="button is-cv-outline">
            Download PDF
          </a>
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="cv-preview-external">
            Open in your browser's PDF viewer ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default CvPreview;
