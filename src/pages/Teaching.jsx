function Teaching() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <h1 className="title is-size-3">Teaching</h1>
        <p className="page-intro">Courses taught and teaching philosophy.</p>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Courses Taught</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">Computable General Equilibrium Models</span>
            <br />
            <span className="item-meta">1st Semester 2025–2026 · Master's Level</span>
            <br />
            Introduction to CGE modeling frameworks for economic policy analysis. Topics include
            social accounting matrices, calibration techniques, and simulation of fiscal and trade
            policy shocks.
          </li>
          <li>
            <span className="item-title">Deep Learning Techniques</span>
            <br />
            <span className="item-meta">1st Semester 2025–2026 · Master's Level</span>
            <br />
            Foundations of neural network architectures and their applications in economics and
            finance. Topics include feedforward networks, recurrent neural networks, and
            sequence modeling for economic forecasting.
          </li>
          <li>
            <span className="item-title">Financial Econometrics</span>
            <br />
            <span className="item-meta">2nd Semester 2024–2025 · Master's Level</span>
            <br />
            Time series modeling and volatility analysis for financial data. Topics include stationarity, ARMA processes, and ARCH and GARCH models.
          </li>
          <li>
            <span className="item-title">Financial Modelling</span>
            <br />
            <span className="item-meta">1st Semester 2023–2024 · Master's Level</span>
            <br />
            Quantitative modeling, simulation, and forecasting in financial markets. Emphasis on
            econometric tools and practical applications.
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Teaching Philosophy</h2>
        <p>
          I strive to cultivate analytical thinking and methodological rigor. My approach
          emphasizes hands-on engagement with real-world data, encouraging students to build
          robust models and critically evaluate empirical results.
        </p>
      </div>
    </div>
  );
}

export default Teaching;