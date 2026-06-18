import { useEffect, useState } from "react";
import { fetchArxivPapers } from "../utils/fetchArxiv";

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

  const manualPapers = [
    {
      title: "Algeria's Economic Diversification Challenge: The Role of Startups, Hydrocarbon Rent, and Institutional Quality",
      authors: "Kahina Mehidi, Fayçal Djebari",
      journal: "Revue de Recherches en Gestion et Economie, Vol. 6, No. 3 (2024)",
      abstract:
        "The aim of this study is to assess the impact of SME and startup creation on economic diversification in Algeria for the period 2000-2021. The methodology employed in this research involves modeling the relationship between the normalized diversification index, the number of private SMEs, hydrocarbon revenue, and institutional quality using a Vector Autoregressive (VAR) model with lagged variables. Our study reveals a significant influence of SME creation, hydrocarbon revenue, and institutional framework quality on export diversification in Algeria.",
      link: "https://asjp.cerist.dz/en/article/255763",
      type: "Journal Article",
    },
  ];

  const renderArxivContent = () => {
    if (loading) return <p className="item-meta">Loading papers from arXiv…</p>;
    if (error) return <p className="item-meta" style={{ color: "red" }}>{error}</p>;
    if (arxivPapers.length === 0) return <p className="item-meta">No working papers found.</p>;

    return arxivPapers.map((paper, index) => (
      <div className="pub-row" key={index}>
        <p className="pub-title">{paper.title}</p>
        <p className="pub-meta">{paper.authors}</p>
        <p className="pub-meta">
          {paper.arxivId && <span>arXiv:{paper.arxivId} · </span>}
          Submitted {new Date(paper.published).toLocaleDateString("en-GB", {
            year: "numeric", month: "long", day: "numeric",
          })}
        </p>
        <p className="pub-abstract">{paper.summary}</p>
        <a href={paper.link} target="_blank" rel="noopener noreferrer">
          View on arXiv
        </a>
      </div>
    ));
  };

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h1 className="title is-size-3">Research</h1>
        <p className="page-intro">
          Publications, working papers, and ongoing research in financial econometrics,
          commodity markets, and development economics.
        </p>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Academic Publications</h2>
        {manualPapers.map((pub, index) => (
          <div className="pub-row" key={index}>
            <p className="pub-title">{pub.title}</p>
            <p className="pub-meta">{pub.authors}</p>
            <p className="pub-meta">
              {pub.type} · {pub.journal}
            </p>
            <p className="pub-abstract">{pub.abstract}</p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              View Paper
            </a>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2 className="section-heading">Working Papers</h2>
        {renderArxivContent()}
      </div>
    </div>
  );
};

export default Research;