import { useEffect, useState } from "react";

function RProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/faycaldjebari/repos")
      .then((res) => res.json())
      .then((data) => {
        const rRepos = data.filter(
          (repo) => repo.language === "R" || repo.name.toLowerCase().includes("r")
        );
        setRepos(rRepos);
      });
  }, []);

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h1 className="title is-size-3">R Projects &amp; Data</h1>
        <p className="page-intro">
          Selected R-based repositories reflecting my work in econometric modeling, volatility
          analysis, and reproducible research.
        </p>
      </div>

      <div className="section-block">
        <h2 className="section-heading">GitHub Repositories</h2>
        {repos.length === 0 ? (
          <p className="item-meta">Loading repositories...</p>
        ) : (
          <ul className="simple-list">
            {repos.map((repo) => (
              <li key={repo.id}>
                <span className="item-title">{repo.name}</span>
                <br />
                <span className="item-meta">
                  {repo.description || "No description provided."}
                </span>
                <br />
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </li>
            ))}
          </ul>
        )}
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
