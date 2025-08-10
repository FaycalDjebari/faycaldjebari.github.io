// src/Home.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="hero is-medium is-link is-bold">
        <div className="hero-body is-fluid">
          <div className="container has-text-centered">
            <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop">
              Fayçal Djebari
            </h1>
            <h3 className="subtitle is-size-5-mobile is-size-4-tablet">
              Ph.D. Candidate in Quantitative Economics
              <br />
              Part-time Lecturer in Financial Econometrics
            </h3>
            <h2 className="subtitle is-size-4">
              University of Béjaïa, Algeria
            </h2>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container is-fluid">
          <div className="content has-text-centered">
            <p>
              Welcome to my academic portfolio. Here you'll find my research,
              teaching materials, and ways to connect.
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="columns is-multiline is-variable is-8 is-centered">
            {/* CV Card */}
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">📄 Curriculum Vitae</p>
                  <p className="subtitle is-6">
                    Academic background & publications
                  </p>
                  <Link to="/cv" className="button is-link is-outlined mt-3">
                    View CV
                  </Link>
                </div>
              </div>
            </div>

            {/* Teaching Card */}
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">📘 Teaching</p>
                  <p className="subtitle is-6">Courses & materials</p>
                  <Link
                    to="/teaching"
                    className="button is-link is-outlined mt-3"
                  >
                    Explore Teaching
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">📬 Contact</p>
                  <p className="subtitle is-6">Get in touch</p>
                  <Link
                    to="/contact"
                    className="button is-link is-outlined mt-3"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>

            {/* R Projects Card */}
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">📂 R Projects</p>
                  <p className="subtitle is-6">Code & data from GitHub</p>
                  <Link
                    to="/r-projects"
                    className="button is-link is-outlined mt-3"
                  >
                    Browse Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Research Card */}
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">📚 Research</p>
                  <p className="subtitle is-6">Projects & publications</p>
                  <Link
                    to="/research"
                    className="button is-link is-outlined mt-3"
                  >
                    Explore Research
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
