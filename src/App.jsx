import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Teaching from "./pages/Teaching";
import RProjects from "./pages/RProjects";
import Research from "./pages/Research";
import "bulma/css/bulma.min.css";
import "./theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaResearchgate, FaOrcid, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar, SiArxiv } from "react-icons/si";

const navLinks = [
  { to: "/research", label: "Research" },
  { to: "/cv", label: "Curriculum Vitae" },
  { to: "/teaching", label: "Teaching" },
  { to: "/r-projects", label: "R Projects" },
];

const pageTitles = {
  "/": "Home",
  "/research": "Research",
  "/cv": "Curriculum Vitae",
  "/teaching": "Teaching",
  "/r-projects": "R Projects",
};

function PageTitle() {
  const location = useLocation();
  const page = pageTitles[location.pathname] || "Home";

  useEffect(() => {
    document.title = `${page} — Fayçal Djebari`;
  }, [page]);

  return null;
}

const socialLinks = [
  { href: "https://www.researchgate.net/profile/Faycal-Djebari?ev=hdr_xprf", label: "ResearchGate", Icon: FaResearchgate },
  { href: "https://orcid.org/0009-0002-9265-9541", label: "ORCID", Icon: FaOrcid },
  { href: "https://scholar.google.com/citations?user=A_YUrlYAAAAJ&hl=fr", label: "Google Scholar", Icon: SiGooglescholar },
  { href: "https://arxiv.org/a/djebari_f_1.html", label: "arXiv", Icon: SiArxiv },
  { href: "https://www.linkedin.com/in/faycaldjebari06/", label: "LinkedIn", Icon: FaLinkedin },
];

function SiteNav() {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setProgress(1);
      return;
    }

    let frame = null;
    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        setProgress(Math.min(window.scrollY / 140, 1));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [isHome]);

  useEffect(() => {
    setIsActive(false);
  }, [location.pathname]);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    // Mirrors the navbar's own color: navy over the unscrolled hero, else
    // whatever the page background actually resolves to (light or dark).
    const solidColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--page-bg")
      .trim();
    meta.setAttribute("content", isHome && progress < 0.5 ? "#16243b" : solidColor);
  }, [isHome, progress]);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isActive]);

  return (
    <nav
      className="navbar site-navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      style={{ "--nav-progress": progress }}
    >
      <div className="navbar-brand">
        <Link
          className="navbar-item brand is-size-5"
          to="/"
          style={{ pointerEvents: progress > 0.5 ? "auto" : "none" }}
        >
          Fayçal Djebari
        </Link>

        <button
          type="button"
          className={`nav-burger ${isActive ? "is-active" : ""}`}
          aria-label={isActive ? "Close menu" : "Open menu"}
          aria-expanded={isActive}
          onClick={() => setIsActive((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="navbar-menu-desktop">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            className={({ isActive: current }) =>
              `navbar-item nav-link ${current ? "is-current" : ""}`
            }
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsActive(false)}
            />
            <motion.div
              className="mobile-menu-panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map(({ to, label }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 + index * 0.045,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    className={({ isActive: current }) =>
                      `mobile-nav-link ${current ? "is-current" : ""}`
                    }
                    to={to}
                    onClick={() => setIsActive(false)}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <PageTitle />

      <SiteNav />

      <main style={{ paddingTop: "var(--nav-height)", flex: "1 0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/r-projects" element={<RProjects />} />
        </Routes>
      </main>

      <motion.footer
        className="footer site-footer mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="content has-text-centered">
          <p className="footer-copy">
            {String.fromCharCode(169)} {new Date().getFullYear()} Fayçal Djebari — All rights reserved.
          </p>
          <div className="social-row mt-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label={label} title={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </motion.footer>
    </Router>
  );
}

export default App;
