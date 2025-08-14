import { useEffect, useState } from "react";
import { fetchArxivPapers } from "../utils/fetchArxiv";

const Research = () => {
  const [arxivPapers, setArxivPapers] = useState([]);

  useEffect(() => {
    const loadPapers = async () => {
      const papers = await fetchArxivPapers();
      setArxivPapers(papers);
    };
    loadPapers();
  }, []);

  const manualPapers = [
  {
    title: "The Role of Startups, Hydrocarbon Rent, and Institutional Quality",
    authors: "Kahina Mehidi, Fayçal Djebari",
    journal: "Revue de Recherches en Gestion et Economie, Vol. 6, No. 3 (2024)",
    abstract:
      "The aim of this study is to assess the impact of SME and startup creation on economic diversification in Algeria for the period 2000-2021. The methodology employed in this research involves modeling the relationship between the normalized diversification index, the number of private SMEs, hydrocarbon revenue, and institutional quality using a Vector Autoregressive (VAR) model with lagged variables. Our study reveals a significant influence of SME creation, hydrocarbon revenue, and institutional framework quality on export diversification in Algeria.",
    link: "https://asjp.cerist.dz/en/article/255763",
    type: "Journal Article",
  },
];

  return (
    <section className="section">
      <div className="container is-fluid is-fullheight">
        <h1 className="title has-text-centered">Research</h1>
        <p className="content">
          Welcome to my research page. Here you'll find insights into my current
          work, publications, and ongoing projects in econometrics, volatility
          modeling, and network-based methodologies.
        </p>

        <h2 className="subtitle mt-5">📘 Selected Publications</h2>
        <div className="columns is-multiline is-fluid is-fullheight">
          {manualPapers.map((pub, index) => (
            <div className="column is-6" key={index}>
              <div className="card">
                <div className="card-content">
                  <p className="title is-5">{pub.title}</p>
                  <p className="subtitle is-6">{pub.authors}</p>
                  <p><strong>Type:</strong> {pub.type}</p>
                  <p><strong>Source:</strong> {pub.journal}</p>
                  <p className="mt-2">{pub.abstract}</p>
                </div>
                <footer className="card-footer">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-footer-item"
                  >
                    View Paper
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>

        <h2 className="subtitle mt-6">📄 Latest arXiv Papers</h2>
        <div className="columns is-multiline is-fluid is-fullheight">
          {arxivPapers.map((paper, index) => (
            <div className="column is-6" key={index}>
              <div className="card">
                <div className="card-content">
                  <p className="title is-5">{paper.title}</p>
                  <p className="subtitle is-6">
                    {new Date(paper.published).toLocaleDateString()}
                  </p>
                  <p>{paper.summary}</p>
                </div>
                <footer className="card-footer">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-footer-item"
                  >
                    View on arXiv
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
