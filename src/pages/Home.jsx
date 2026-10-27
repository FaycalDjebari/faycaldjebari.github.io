import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { exploreLinks } from "../data/nav";
import { bioParagraphs, visitingPositions, interests } from "../data/bio";
import { publications } from "../data/publications";
import { socialLinks, contactEmail } from "../data/socialLinks";
import profilePhoto from "../assets/profile-glasgow.jpg";

const flagshipPaper = publications.find((p) => p.flagship);

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
                  Visiting Researcher — University of Glasgow (2026) · Universidad de Granada (Erasmus+ 2026)
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
          <div className="about-grid">
            <motion.div
              className="profile-photo-frame"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={profilePhoto} alt="Fayçal Djebari at the University of Glasgow" />
            </motion.div>

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
            I'm always glad to hear from researchers working in related areas — for collaboration,
            postdoctoral opportunities, or speaking inquiries, feel free to reach out directly.
          </p>
          <ul className="simple-list">
            <li>
              <span className="item-title">Email</span>
              <br />
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </li>
            {socialLinks.map(({ href, label }) => (
              <li key={label}>
                <span className="item-title">{label}</span>
                <br />
                <a href={href} target="_blank" rel="noopener noreferrer">
                  Visit Profile
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
