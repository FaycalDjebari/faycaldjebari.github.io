function CV() {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title has-text-centered">📄 Curriculum Vitae</h1>

        {/* Education */}
        <div className="box">
          <h2 className="subtitle">🎓 Education</h2>
          <ul>
            <li>
              <strong>Ph.D. Candidate in Quantitative Economics</strong><br />
              University of Béjaïa — Expected Completion: 2026
            </li>
            <li>
              <strong>Master of Science in Quantitative Economics</strong><br />
              University of Béjaïa — Graduated: 2022
            </li>
            <li>
              <strong>Bachelor of Science in Quantitative Economics</strong><br />
              University of Béjaïa — Graduated: 2020
            </li>
          </ul>
        </div>
        {/* Certifications */}
<div className="box">
  <h2 className="subtitle">📜 Certifications</h2>
  <ul>
    <li>
      <strong>Financial Markets <em>(with Honors)</em> - Yale University</strong> — Online non-credit course authorized by Yale University, offered through Coursera. <br />
      <span className="has-text-grey">
        Skills gained: Risk Management, Behavioral Economics, Investment Banking, Capital Markets, Derivatives. <br />
        <a
          href="https://www.coursera.org/account/accomplishments/verify/VQRQ8R3BHY3Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </span>
    </li>
  </ul>
</div>


        {/* Academic Experience */}
        <div className="box">
          <h2 className="subtitle">📚 Academic Experience</h2>
          <ul>
            <li>
              <strong>Part-Time Lecturer</strong><br />
              Financial Econometrics & Financial Modelling (Master’s Level)
            </li>
            <li>
              <strong>Research Contributor</strong><br />
              Active on ResearchGate, specializing in network-based volatility models and systemic risk
            </li>
          </ul>
        </div>

       {/* Selected Publications */}
<div className="box">
  <h2 className="subtitle">📘 Selected Publications</h2>
  <ul>
    <li>
      Mehidi, K., Djebari, F. (2024). <em>Algeria's Economic Diversification Challenge: The Role of Startups, Hydrocarbon Rent, and Institutional Quality</em>. <br />
      <span className="has-text-grey">
        Revue de Recherches en Gestion et Economie, Vol. 6, No. 3, pp. 360–382. <br />
        <a
          href="https://asjp.cerist.dz/en/article/255763"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Article
        </a>
      </span>
    </li>
  </ul>
</div>

<div className="box">
  <h2 className="subtitle">📄 Working Papers</h2>
  <ul>
    <li>
      Djebari, F., Mehidi, K., Mazouz, K., Otto, P. (2025). <em>Volatility Spillovers and Interconnectedness in OPEC Oil Markets: A Network-Based log-ARCH Approach</em>. <br />
      <span className="has-text-grey">
        arXiv preprint arXiv:2507.15046 <br />
        <a
          href="https://arxiv.org/abs/2507.15046"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on arXiv
        </a>
      </span>
    </li>
  </ul>
</div>

{/* Honors & Awards */}
<div className="box">
  <h2 className="subtitle">🏅 Honors & Awards</h2>
  <ul>
    <li>
      <strong>2024</strong> — Fully Funded PhD Scholarship in Economics, Université du Québec à Montréal (UQAM), Canada
    </li>
  </ul>
</div>

{/* Projects & Repositories */}
<div className="box">
  <h2 className="subtitle">💻 Projects & Repositories</h2>
  <ul>
    <li>
      <strong>Volatility Spillovers and Interconnectedness in OPEC Oil Markets</strong> — Reproducibility guide and full R code for the network-based log-ARCH framework. Includes GMM estimation, MGARCH benchmarks, and forecasting diagnostics. <br />
      <a
        href="https://github.com/FaycalDjebari/Volatility-Spillovers-and-Interconnectedness-in-OPEC-Oil-Markets"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    </li>
  </ul>
</div>




        {/* Skills */}
        <div className="box">
          <h2 className="subtitle">🛠 Skills</h2>
          <div className="tags are-medium">
            <span className="tag is-info">Econometric Modeling</span>
            <span className="tag is-info">Network Log-ARCH Frameworks</span>
            <span className="tag is-info">Spectral Connectedness</span>
            <span className="tag is-info">ARDL / VECM / TY Models</span>
            <span className="tag is-info">LaTeX & Citation Styling</span>
            <span className="tag is-info">Academic Writing</span>
            <span className="tag is-info">GitHub & Reproducible Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
