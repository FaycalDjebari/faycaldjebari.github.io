import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchArxivPapers } from "../utils/fetchArxiv";
import { publications } from "../data/publications";
import { researchSummary, interests } from "../data/bio";
import { workInProgress, statusForArxivId } from "../data/cv";
import { researcherIds } from "../data/socialLinks";
import PaperCard from "../components/PaperCard";

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Research = () => {
  const [arxivPapers, setArxivPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPapers = async () => {
      try {
        const papers = await fetchArxivPapers();
        setArxivPapers(papers);
      } catch {
        setError("Could not load arXiv papers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPapers();
  }, []);

  const renderWorkingPapers = () => {
    if (loading) return <p className="item-meta">Loading working papers…</p>;
    if (error) return <p className="item-meta">{error}</p>;
    if (arxivPapers.length === 0) return <p className="item-meta">No working papers at the moment.</p>;

    return arxivPapers.map((paper) => (
      <PaperCard
        key={paper.arxivId}
        title={paper.title}
        authors={paper.authors}
        venue={`arXiv:${paper.arxivId} · ${new Date(paper.published).getFullYear()}`}
        status={statusForArxivId(paper.arxivId)}
        abstract={paper.summary}
        links={[{ href: paper.link, label: "arXiv" }]}
      />
    ));
  };

  return (
    <div className="page-wrap">
      <div className="page-header">
        <span className="section-eyebrow">Research</span>
        <h1 className="title is-size-3 mt-2">Research &amp; Publications</h1>
        <p className="page-intro">
          Financial econometrics, network volatility, and the economics of resource dependence.
        </p>
      </div>

      <motion.section className="section-block" {...reveal}>
        <h2 className="section-heading">Research Interests</h2>
        {researchSummary.map((paragraph, index) => (
          <p key={index} className="lead-paragraph">{paragraph}</p>
        ))}
        <div className="tag-row mt-4">
          {interests.map((interest) => (
            <span className="tag-soft" key={interest}>{interest}</span>
          ))}
        </div>
      </motion.section>

      <motion.section className="section-block" {...reveal}>
        <h2 className="section-heading">Researcher Profiles</h2>
        <div className="id-grid is-three">
          {researcherIds.map(({ label, id, href }) => (
            <a key={label} className="id-card" href={href} target="_blank" rel="noopener noreferrer">
              <span className="id-card-label">{label}</span>
              <span className="id-card-value">{id}</span>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section className="section-block" {...reveal}>
        <h2 className="section-heading">Published Papers</h2>
        {publications.map((pub) => (
          <PaperCard
            key={pub.id}
            title={pub.title}
            authors={pub.authors}
            venue={pub.journal}
            abstract={pub.abstract}
            links={[{ href: pub.link, label: pub.doi ? `DOI ${pub.doi}` : "Article" }]}
          />
        ))}
      </motion.section>

      <motion.section className="section-block" {...reveal}>
        <h2 className="section-heading">Working Papers</h2>
        {renderWorkingPapers()}
      </motion.section>

      <motion.section className="section-block" {...reveal}>
        <h2 className="section-heading">Work in Progress</h2>
        {workInProgress.map((item) => (
          <PaperCard key={item.title} title={item.title} venue={item.collaborators} />
        ))}
      </motion.section>
    </div>
  );
};

export default Research;
