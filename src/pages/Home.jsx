import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/cv", title: "Curriculum Vitae", description: "Academic background, certifications & skills" },
  { to: "/research", title: "Research", description: "Publications & ongoing working papers" },
  { to: "/teaching", title: "Teaching", description: "Courses taught & teaching materials" },
  { to: "/r-projects", title: "R Projects", description: "Code, data & analysis from GitHub" },
];

const interests = [
  "Financial Econometrics",
  "Network Volatility Models",
  "Commodity Markets",
  "Resource Dependence",
  "Institutional Quality",
  "Panel Data Methods",
];

function Home() {
  return (
    <>
      <section className="hero is-large site-hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-eyebrow">Quantitative Economics · Financial Econometrics</span>
              <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop">
                Fayçal Djebari
              </h1>
              <h2 className="subtitle is-tagline is-size-5-mobile is-size-4-tablet mt-3">
                Ph.D. Candidate — University of Béjaïa, Algeria
                <br />
                <span style={{ opacity: 0.75, fontSize: "0.9em" }}>
                  Visiting Researcher — Universidad de Granada · Erasmus+ 2026
                </span>
              </h2>
              <div className="buttons is-centered mt-5">
                <Link to="/research" className="button is-medium is-cta">
                  View Research
                </Link>
                <Link to="/cv" className="button is-medium is-cta-outline">
                  Curriculum Vitae
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="page-wrap">
        <motion.div className="section-block" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="section-heading">About</h2>
          <p style={{ lineHeight: "1.85", maxWidth: "600px" }}>
            I am a Ph.D. candidate in Quantitative Economics at the University of Béjaïa, where I also teach Financial Econometrics at the master's level. My research spans financial econometrics and development economics, combining network-based volatility models, dynamic conditional correlations, and panel data methods to study commodity market dynamics, systemic risk, and the distributional consequences of resource dependence in oil-exporting economies.
          </p>
          <p style={{ lineHeight: "1.85", maxWidth: "600px", marginTop: "1rem" }}>
            My work is conducted in collaboration with researchers at the University of Glasgow and Cardiff University, and I am currently a visiting researcher at the Universidad de Granada under an Erasmus+ fellowship.
          </p>
        </motion.div>

        <motion.div className="section-block" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
          <h2 className="section-heading">Research Interests</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {interests.map((interest) => (
              <span className="tag-soft" key={interest}>{interest}</span>
            ))}
          </div>
        </motion.div>

        <motion.div className="section-block" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="section-heading">Explore</h2>
          <div className="nav-link-list">
            {navLinks.map(({ to, title, description }, index) => (
              <motion.div key={to} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }}>
                <Link to={to} className="nav-link-row">
                  <span>
                    <span className="nav-link-title">{title}</span>
                    <span className="nav-link-desc">{description}</span>
                  </span>
                  <span className="nav-link-arrow">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="section-block" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          <h2 className="section-heading">Get in Touch</h2>
          <p style={{ lineHeight: "1.85", maxWidth: "600px" }}>
            For collaboration, questions, or speaking inquiries, feel free to reach out directly.
          </p>
          <ul className="simple-list">
            <li>
              <span className="item-title">Email</span>
              <br />
              <a href="mailto:faycal.djebari@univ-bejaia.dz">faycal.djebari@univ-bejaia.dz</a>
            </li>
            <li>
              <span className="item-title">ResearchGate</span>
              <br />
              <a
                href="https://www.researchgate.net/profile/Faycal-Djebari?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </li>
            <li>
              <span className="item-title">ORCID</span>
              <br />
              <a
                href="https://orcid.org/0009-0002-9265-9541"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </li>
            <li>
              <span className="item-title">Google Scholar</span>
              <br />
              <a
                href="https://scholar.google.com/citations?user=A_YUrlYAAAAJ&hl=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </li>
            <li>
              <span className="item-title">arXiv</span>
              <br />
              <a
                href="https://arxiv.org/a/djebari_f_1.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </li>
            <li>
              <span className="item-title">LinkedIn</span>
              <br />
              <a
                href="https://www.linkedin.com/in/faycaldjebari06/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
