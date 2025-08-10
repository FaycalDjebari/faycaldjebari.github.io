function Teaching() {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title has-text-centered">📘 Teaching</h1>

        {/* Courses Taught */}
        <div className="box">
          <h2 className="subtitle">📚 Courses Taught</h2>
          <ul>
            <li>
              <strong>Financial Econometrics</strong><br />
              Time series modeling, volatility analysis, and causality testing.<br />
              Topics include ARDL, VECM, and network-based approaches.
              <br />
              <a className="button is-link is-small mt-2" href="#" disabled>
                Download Syllabus (Coming Soon)
              </a>
            </li>
            <br />
            <li>
              <strong>Financial Modelling</strong><br />
              Quantitative modeling, simulation, and forecasting in financial markets.<br />
              Emphasis on econometric tools and practical applications.
              <br />
              <a className="button is-link is-small mt-2" href="#" disabled>
                Download Materials (Coming Soon)
              </a>
            </li>
          </ul>
        </div>

        {/* Teaching Philosophy */}
        <div className="box">
          <h2 className="subtitle">🧠 Teaching Philosophy</h2>
          <p>
            I strive to cultivate analytical thinking and methodological rigor. My approach emphasizes hands-on engagement with real-world data, encouraging students to build robust models and critically evaluate empirical results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Teaching;
