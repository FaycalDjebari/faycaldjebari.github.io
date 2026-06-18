import { useEffect, useState } from "react";
import { fetchArxivPapers } from "../utils/fetchArxiv";

function CV() {
  const [arxivPapers, setArxivPapers] = useState([]);

  useEffect(() => {
    const loadPapers = async () => {
      const papers = await fetchArxivPapers();
      setArxivPapers(papers);
    };
    loadPapers();
  }, []);

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h1 className="title is-size-3">Curriculum Vitae</h1>
        <p className="page-intro">Academic background, publications, and experience.</p>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Education</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">Ph.D. Candidate in Quantitative Economics</span>
            <br />
            <span className="item-meta">University of Béjaïa · Expected Completion: 2027</span>
          </li>
          <li>
            <span className="item-title">Visiting Ph.D. Researcher · Erasmus+ Fellowship</span>
            <br />
            <span className="item-meta">Universidad de Granada, Spain · April 2026 to July 2026</span>
          </li>
          <li>
            <span className="item-title">M.Sc. in Quantitative Economics</span>
            <br />
            <span className="item-meta">University of Béjaïa · Graduated: 2022</span>
          </li>
          <li>
            <span className="item-title">B.Sc. in Quantitative Economics</span>
            <br />
            <span className="item-meta">University of Béjaïa · Graduated: 2020</span>
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Certifications</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">Financial Markets (with Honors) · Yale University</span>
            <br />
            <span className="item-meta">
              Online non-credit course authorized by Yale University, offered through Coursera.
            </span>
            <br />
            <span className="item-meta">
              Skills gained: Risk Management, Behavioral Economics, Investment Banking, Capital Markets, Derivatives.
            </span>
            <br />
            <a href="https://www.coursera.org/account/accomplishments/verify/VQRQ8R3BHY3Q" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Selected Publications</h2>
        <ul className="simple-list">
          <li>
            Mehidi, K., Djebari, F. (2024).{" "}
            <em>Algeria's Economic Diversification Challenge: The Role of Startups, Hydrocarbon Rent, and Institutional Quality</em>.
            <br />
            <span className="item-meta">Revue de Recherches en Gestion et Economie, Vol. 6, No. 3, pp. 360–382.</span>
            <br />
            <a href="https://asjp.cerist.dz/en/article/255763" target="_blank" rel="noopener noreferrer">
              View Article
            </a>
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Working Papers</h2>
        <ul className="simple-list">
          {arxivPapers.length === 0 ? (
            <li><span className="item-meta">Loading working papers...</span></li>
          ) : (
            arxivPapers.map((paper, index) => (
              <li key={index}>
                {paper.authors} ({new Date(paper.published).getFullYear()}).{" "}
                <em>{paper.title}</em>.
                <br />
                <span className="item-meta">arXiv preprint arXiv:{paper.arxivId}</span>
                <br />
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  View on arXiv
                </a>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Academic Experience</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">Part-Time Lecturer</span>
            <br />
            <span className="item-meta">University of Béjaïa, Algeria · Sept 2023 to Present</span>
            <br />
            <span>Financial Econometrics and Financial Modelling (Master's Level)</span>
            <br />
            <span>Deep Learning Techniques (Master's Level)</span>
            <br />
            <span>Computable General Equilibrium Models (Master's Level)</span>
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Honors and Awards</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">2026</span> · Selected for an Erasmus+ Fellowship, Visiting Ph.D. Researcher, Universidad de Granada, Spain
          </li>
          <li>
            <span className="item-title">2024</span> · Awarded a Fully Funded Ph.D. Scholarship in Economics, Ecole des Sciences de la Gestion (ESG), Université du Québec à Montréal (UQAM), Canada
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Projects and Repositories</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">Volatility Spillovers and Interconnectedness in OPEC Oil Markets</span>
            <br />
            <span>Reproducibility guide and full R code for the network-based log-ARCH framework. Includes GMM estimation, MGARCH benchmarks, and forecasting diagnostics.</span>
            <br />
            <a href="https://github.com/FaycalDjebari/Volatility-Spillovers-and-Interconnectedness-in-OPEC-Oil-Markets" target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CV;