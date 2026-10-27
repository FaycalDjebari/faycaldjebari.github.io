import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PaperCard({ title, authors, venue, status, abstract, links = [] }) {
  const [open, setOpen] = useState(false);
  const abstractId = useId();

  return (
    <article className="paper-card">
      <h3 className="paper-title">{title}</h3>
      {authors && <p className="paper-authors">{authors}</p>}
      {venue && <p className="paper-venue">{venue}</p>}
      {status && <span className="paper-status">{status}</span>}

      <div className="paper-actions">
        {abstract && (
          <button
            type="button"
            className={`paper-toggle ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls={abstractId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide abstract" : "Show abstract"}
            <span className="paper-toggle-chevron" aria-hidden="true" />
          </button>
        )}
        {links.map(({ href, label }) => (
          <a key={href} className="paper-link" href={href} target="_blank" rel="noopener noreferrer">
            {label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={abstractId}
            className="paper-abstract-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="paper-abstract">{abstract}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default PaperCard;
