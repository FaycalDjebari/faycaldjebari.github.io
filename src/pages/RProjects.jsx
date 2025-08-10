import { useEffect, useState } from 'react';

function RProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/faycaldjebari/repos')
      .then(res => res.json())
      .then(data => {
        const rRepos = data.filter(repo =>
          repo.language === 'R' || repo.name.toLowerCase().includes('r')
        );
        setRepos(rRepos);
      });
  }, []);

  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title has-text-centered">📊 R Projects & Data</h1>

        {/* Introduction */}
        <div className="box">
          <h2 className="subtitle">🔍 Overview</h2>
          <p>
            This section showcases selected R-based repositories hosted on GitHub. These projects reflect my work in econometric modeling, volatility analysis, and reproducible research.
          </p>
        </div>

        {/* GitHub Repositories */}
        <div className="box">
          <h2 className="subtitle">📁 GitHub Repositories</h2>
          {repos.length === 0 ? (
            <p>Loading repositories...</p>
          ) : (
            <div className="columns is-multiline">
              {repos.map(repo => (
                <div
                  key={repo.id}
                  className="column is-12-mobile is-6-tablet is-4-desktop"
                >
                  <div className="card">
                    <div className="card-content">
                      <p className="title is-5">{repo.name}</p>
                      <p className="subtitle is-6">
                        {repo.description || 'No description provided.'}
                      </p>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-link is-small"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Research Focus */}
        <div className="box">
          <h2 className="subtitle">📐 Research Focus</h2>
          <p>
            My R projects often explore topics such as network-based volatility transmission, spectral connectedness, and causality filtering. Each repository is designed to be reproducible and accessible for collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RProjects;
