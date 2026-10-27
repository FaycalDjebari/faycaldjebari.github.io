import { useEffect, useState } from "react";
import { fetchArxivPapers } from "../utils/fetchArxiv";
import { visitingPositions } from "../data/bio";
import { publications } from "../data/publications";
import { courses } from "../data/courses";
import { replicationPackages } from "../data/replicationPackages";
import { orcidUrl, scopusUrl, webOfScienceUrl } from "../data/socialLinks";
import {
  cvPdfPath,
  workingPaperNote,
  doctoralThesis,
  workInProgress,
  conferencePresentations,
  peerReviewActivities,
  thesisSupervision,
  technicalSkills,
  languages,
} from "../data/cv";

function positionAt(institution) {
  return visitingPositions.find((p) => p.institution.includes(institution));
}

const glasgow = positionAt("Glasgow");
const granada = positionAt("Granada");

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
        <p className="page-intro">
          Academic background, publications, and experience.
        </p>
        <a href={cvPdfPath} download="Faycal-Djebari-CV.pdf" className="button is-cta mt-4">
          Download CV (PDF)
        </a>
        <p className="cv-identifiers mt-4">
          <a href={orcidUrl} target="_blank" rel="noopener noreferrer">ORCID</a>
          {" · "}
          <a href={scopusUrl} target="_blank" rel="noopener noreferrer">Scopus</a>
          {" · "}
          <a href={webOfScienceUrl} target="_blank" rel="noopener noreferrer">Web of Science</a>
        </p>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Education</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">
              Ph.D. Candidate in Quantitative Economics
            </span>
            <br />
            <span className="item-meta">
              University of Béjaïa · Expected Completion: 2027
            </span>
          </li>
          <li>
            <span className="item-title">
              {glasgow.role}
            </span>
            <br />
            <span className="item-meta">
              {glasgow.institution} · {glasgow.period} · Host: {glasgow.host}
            </span>
          </li>
          <li>
            <span className="item-title">
              {granada.role}
            </span>
            <br />
            <span className="item-meta">
              {granada.institution} · {granada.period} · Host: {granada.host}
            </span>
          </li>
          <li>
            <span className="item-title">M.Sc. in Quantitative Economics</span>
            <br />
            <span className="item-meta">
              University of Béjaïa · Graduated: 2022
            </span>
          </li>
          <li>
            <span className="item-title">B.Sc. in Quantitative Economics</span>
            <br />
            <span className="item-meta">
              University of Béjaïa · Graduated: 2020
            </span>
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Doctoral Thesis</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">{doctoralThesis.title}</span>
            <br />
            <span className="item-meta">Main Supervisor: {doctoralThesis.mainSupervisor}</span>
            <br />
            <span className="item-meta">Co-Supervisor: {doctoralThesis.coSupervisor}</span>
            <br />
            {doctoralThesis.hostSupervisors.map((host) => (
              <span className="item-meta" key={host}>
                Host Supervisor: {host}
                <br />
              </span>
            ))}
            <span className="item-meta">Laboratory: {doctoralThesis.laboratory}</span>
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Certifications</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">
              Financial Markets (with Honors) · Yale University
            </span>
            <br />
            <span className="item-meta">
              Online non-credit course authorized by Yale University, offered
              through Coursera.
            </span>
            <br />
            <span className="item-meta">
              Skills gained: Risk Management, Behavioral Economics, Investment
              Banking, Capital Markets, Derivatives.
            </span>
            <br />
            <a
              href="https://www.coursera.org/account/accomplishments/verify/VQRQ8R3BHY3Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Publications</h2>
        <ul className="simple-list">
          {publications.map((pub) => (
            <li key={pub.id}>
              {pub.authors} ({pub.year}). <em>{pub.title}</em>.
              <br />
              <span className="item-meta">{pub.journal}</span>
              <br />
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                View Article
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Working Papers</h2>
        <ul className="simple-list">
          {arxivPapers.length === 0 ? (
            <li>
              <span className="item-meta">Loading working papers...</span>
            </li>
          ) : (
            arxivPapers.map((paper, index) => (
              <li key={index}>
                {paper.authors} ({new Date(paper.published).getFullYear()}).{" "}
                <em>{paper.title}</em>.
                <br />
                <span className="item-meta">
                  arXiv preprint arXiv:{paper.arxivId}
                </span>
                <br />
                <span className="item-meta">{workingPaperNote}</span>
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
        <h2 className="section-heading">Work in Progress</h2>
        <ul className="simple-list">
          {workInProgress.map((item) => (
            <li key={item.title}>
              <span className="item-title">{item.title}</span>
              <br />
              <span className="item-meta">{item.collaborators}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Conference Presentations</h2>
        <ul className="simple-list">
          {conferencePresentations.map((item) => (
            <li key={item.title}>
              {item.authors} ({item.year}). <em>{item.title}</em>.
              <br />
              <span className="item-meta">{item.venue}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Teaching Experience</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">Part-Time Lecturer</span>
            <br />
            <span className="item-meta">
              University of Béjaïa, Algeria · Sept 2023 to Present
            </span>
            {courses.map((course) => (
              <span key={course.title}>
                <br />
                {course.title} ({course.meta})
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Thesis Supervision</h2>
        <ul className="simple-list">
          {thesisSupervision.map((item) => (
            <li key={item.title}>
              <span className="item-title">{item.title}</span>
              <br />
              <span className="item-meta">{item.students}</span>
              <br />
              <span className="item-meta">{item.meta}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Peer Review Activities</h2>
        <ul className="simple-list">
          {peerReviewActivities.map((journal) => (
            <li key={journal}>{journal}</li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Honors and Awards</h2>
        <ul className="simple-list">
          <li>
            <span className="item-title">2026</span> · Selected for an Erasmus+
            Fellowship, Visiting Ph.D. Researcher, Universidad de Granada, Spain
          </li>
          <li>
            <span className="item-title">2024</span> · Awarded a Fully Funded
            Ph.D. Scholarship in Economics, Ecole des Sciences de la Gestion
            (ESG), Université du Québec à Montréal (UQAM), Canada
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Technical Skills</h2>
        <p className="item-meta" style={{ marginBottom: "0.5rem" }}>Programming</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
          {technicalSkills.programming.map((skill) => (
            <span className="tag-soft" key={skill}>{skill}</span>
          ))}
        </div>
        <p className="item-meta" style={{ marginBottom: "0.5rem" }}>Software</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {technicalSkills.software.map((skill) => (
            <span className="tag-soft" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Languages</h2>
        <ul className="simple-list">
          {languages.map((item) => (
            <li key={item.language}>
              <span className="item-title">{item.language}</span>
              <br />
              <span className="item-meta">{item.level}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h2 className="section-heading">Replication Packages</h2>
        <ul className="simple-list">
          {replicationPackages.map((pkg) => (
            <li key={pkg.repo}>
              <span className="item-title">{pkg.title}</span>
              <br />
              <span>{pkg.description}</span>
              <br />
              <a href={pkg.repo} target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CV;
