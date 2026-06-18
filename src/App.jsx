import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Teaching from "./pages/Teaching";
import RProjects from "./pages/RProjects";
import Research from "./pages/Research";
import "bulma/css/bulma.min.css";
import "./theme.css";
import { motion } from "framer-motion";
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
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
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
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <PageTitle />

      <SiteNav />

      <main style={{ paddingTop: "3.25rem", flex: "1 0 auto" }}>
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
