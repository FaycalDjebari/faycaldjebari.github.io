import { replicationPackages } from "../data/replicationPackages";

function RProjects() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <h1 className="title is-size-3">R Projects &amp; Data</h1>
        <p className="page-intro">
          Replication packages accompanying my papers, reflecting my work in econometric
          modeling, volatility analysis, and reproducible research.
        </p>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Replication Packages</h2>
        {replicationPackages.map((pkg) => (
          <div className="pub-row" key={pkg.repo}>
            <p className="pub-title">{pkg.title}</p>
            <p className="pub-meta">
              {pkg.language} · Replication code for{" "}
              <a href={pkg.paperLink} target="_blank" rel="noopener noreferrer">
                {pkg.paper}
              </a>
            </p>
            <p className="pub-abstract">{pkg.description}</p>
            <a href={pkg.repo} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2 className="section-heading">Research Focus</h2>
        <p>
          My R projects often explore topics such as network-based volatility transmission,
          spectral connectedness, and causality filtering. Each repository is designed to be
          reproducible and accessible for collaboration.
        </p>
      </div>
    </div>
  );
}

export default RProjects;
