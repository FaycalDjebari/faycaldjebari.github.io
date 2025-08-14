import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Teaching from "./pages/Teaching";
import Contact from "./pages/Contact";
import RProjects from "./pages/RProjects";
import Research from "./pages/Research";
import "bulma/css/bulma.min.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// React Icons
import { FaResearchgate, FaOrcid, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar, SiArxiv } from "react-icons/si";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Router>
      <Helmet>
        <title>Fayçal Djebari - Research Portfolio</title>
        <meta
          name="description"
          content="Official research portfolio of Fayçal Djebari. View publications, CV, teaching, and contact details."
        />
      </Helmet>

      {/* Navbar */}
      <motion.nav
        className="navbar has-background is-spaced is-fluid is-fullheight"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item is-size-4 has-text-weight-bold has-text-info"
            to="/"
          >
            Fayçal Djebari
          </Link>

          {/* Mobile Menu Burger */}
          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

         {/* Navbar Menu */}{" "}
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          {" "}
          <div className="navbar-end" style={{ width: "100%" }}>
            {" "}
            <Link className="navbar-item" to="/research">
              {" "}
              Research{" "}
            </Link>{" "}
            <Link className="navbar-item" to="/cv">
              {" "}
              Curriculum Vitae{" "}
            </Link>{" "}
            <Link className="navbar-item" to="/teaching">
              {" "}
              Teaching{" "}
            </Link>{" "}
            <Link className="navbar-item" to="/r-projects">
              {" "}
              R Projects{" "}
            </Link>{" "}
            <Link className="navbar-item" to="/contact">
              {" "}
              Contact{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </motion.nav>

      {/* Page Routes */}{" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/research" element={<Research />} />{" "}
        <Route path="/cv" element={<CV />} />{" "}
        <Route path="/teaching" element={<Teaching />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/r-projects" element={<RProjects />} />{" "}
      </Routes>{" "}

      {/* Footer */}
      <motion.footer
        className="hero has-background mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="hero-body has-text-centered">
          <p className="has-text-grey-dark">
            <strong>© {new Date().getFullYear()} Fayçal Djebari</strong> — All rights reserved.
          </p>
          <div className="buttons is-centered mt-3 is-flex is-justify-content-center is-flex-wrap-wrap">
            <a
              href="https://www.researchgate.net/profile/Faycal-Djebari?ev=hdr_xprf"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-small is-link m-1"
            >
              <FaResearchgate className="mr-2" /> ResearchGate
            </a>
            <a
              href="https://orcid.org/0009-0002-9265-9541"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-small is-info m-1"
            >
              <FaOrcid className="mr-2" /> ORCID
            </a>
            <a
              href="https://scholar.google.com/citations?user=A_YUrlYAAAAJ&hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-small is-success m-1"
            >
              <SiGooglescholar className="mr-2" /> Google Scholar
            </a>
            <a
              href="https://arxiv.org/a/djebari_f_1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-small is-dark m-1"
            >
              <SiArxiv className="mr-2" /> arXiv
            </a>
            <a
              href="https://www.linkedin.com/in/faycaldjebari06/"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-small is-primary m-1"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </motion.footer>
    </Router>
  );
}

export default App;
