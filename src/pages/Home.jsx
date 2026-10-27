import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { exploreLinks } from "../data/nav";
import {
  heroTitle,
  heroStatement,
  heroAffiliation,
  bioParagraphs,
  visitingPositions,
  interests,
  collaboratingInstitutions,
} from "../data/bio";
import { publications } from "../data/publications";
import { workInProgress } from "../data/cv";
import { socialLinks, contactEmail } from "../data/socialLinks";
import arxivPapers from "../data/arxivPapers.json";
import profilePhoto from "../assets/profile-glasgow.jpg";

const flagshipPaper = publications.find((p) => p.flagship);

const stats = [
  { value: publications.length, one: "Peer-reviewed publication", many: "Peer-reviewed publications" },
  { value: arxivPapers.length, one: "Working paper", many: "Working papers" },
  { value: workInProgress.length, one: "Project in progress", many: "Projects in progress" },
  { value: collaboratingInstitutions.length, one: "Collaborating university abroad", many: "Collaborating universities abroad" },
].map(({ value, one, many }) => ({ value, label: value === 1 ? one : many }));

function scrollToAbout() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("about")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

function Home() {
  return (
    <>
      <section className="hero site-hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-eyebrow">{heroTitle}</span>
              <h1 className="title is-size-2-mobile is-size-1-tablet">
                Fayçal Djebari
              </h1>
              <p className="hero-statement">{heroStatement}</p>
              <p className="hero-affiliation">{heroAffiliation}</p>
              <p className="hero-availability">
                <span className="hero-availability-dot" aria-hidden="true" />
                Open to postdoctoral opportunities &amp; research collaborations
              </p>
              <div className="buttons is-centered mt-5">
                <button type="button" onClick={scrollToAbout} className="button is-medium is-cta">
                  About Me
                </button>
                <Link to="/research" className="button is-medium is-cta-outline">
                  Research
                </Link>
                <Link to="/cv" className="button is-medium is-cta-outline">
                  Curriculum Vitae
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <button type="button" className="scroll-cue" onClick={scrollToAbout} aria-label="Scroll to About section">
          <span className="scroll-cue-label">Scroll</span>
          <span className="scroll-cue-arrow" aria-hidden="true" />
        </button>
      </section>

      <div className="page-wrap is-home">
        <motion.div id="about" className="section-block" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="section-heading">About Me</h2>
          <div className="about-grid">
            <div className="about-photo-col">
              <motion.div
                className="profile-photo-frame"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img src={profilePhoto} alt="Fayçal Djebari at the University of Glasgow" />
              </motion.div>
            </div>

            <div className="about-text">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index} style={{ lineHeight: "1.85", marginBottom: index < bioParagraphs.length - 1 ? "1rem" : 0 }}>
                  {paragraph}
                </p>
              ))}

              <ul className="simple-list about-visiting-list mt-4">
                {visitingPositions.map((position) => (
                  <li key={position.institution}>
                    <span className="item-title">{position.institution}</span>
                    <br />
                    <span className="item-meta">
                      {position.role} · {position.period} · Host: {position.host}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="stat-grid">
            {stats.map(({ value, label }, index) => (
              <motion.div
                key={label}
                className="stat-card"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </motion.div>
            ))}
          </div>

          <div className="institutions-row">
            <span className="section-eyebrow">Collaborating with researchers at</span>
            <p className="institutions-list">{collaboratingInstitutions.join(" · ")}</p>
          </div>

          {flagshipPaper && (
            <motion.a
              href={flagshipPaper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flagship-card"
              whileHover={{ scale: 1.01 }}
            >
              <span className="section-eyebrow">Featured Publication</span>
              <p className="pub-title">{flagshipPaper.title}</p>
              <p className="pub-meta">{flagshipPaper.journal}</p>
            </motion.a>
          )}
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
            {exploreLinks.map(({ to, title, description }, index) => (
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
            If you work on related questions, I would be glad to hear from you about a collaboration,
            a postdoctoral position, or an invitation to present.
          </p>
          <div className="id-grid get-in-touch-grid">
            <a className="email-card" href={`mailto:${contactEmail}`}>
              <span className="id-card-label">Email</span>
              <span className="email-card-value">{contactEmail}</span>
            </a>
            {socialLinks.map(({ href, label, Icon }) => (
              <a key={label} className="id-card has-icon" href={href} target="_blank" rel="noopener noreferrer">
                <span className="id-card-icon" aria-hidden="true"><Icon /></span>
                <span>
                  <span className="id-card-label">{label}</span>
                  <span className="id-card-value">Visit profile ↗</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
