export const GoogleScholarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 48 48"
    fill="currentColor"
  >
    <path d="M24 4C14.1 4 6 12.1 6 22s8.1 18 18 18 18-8.1 18-18S33.9 4 24 4zm0 32c-7.7 0-14-6.3-14-14S16.3 8 24 8s14 6.3 14 14-6.3 14-14 14z" />
  </svg>
);

export const ArxivIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0L8 8h8l-4-8zm0 24l4-8H8l4 8zM2 9h20v6H2V9z" />
  </svg>
);

// Monogram badges — react-icons' "si" set has no Scopus/Web of Science
// glyphs, and at the ~18px size used inside .social-icon-link circles,
// styled text reads cleaner than a fabricated brand SVG.
export const ScopusIcon = () => (
  <span aria-hidden="true" style={{ fontSize: "0.62em", fontWeight: 700, letterSpacing: "-0.02em" }}>
    Sc
  </span>
);

export const WebOfScienceIcon = () => (
  <span aria-hidden="true" style={{ fontSize: "0.5em", fontWeight: 700, letterSpacing: "-0.03em" }}>
    WoS
  </span>
);
