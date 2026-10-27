import { courses } from "../data/courses";

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
          {courses.map((course) => (
            <li key={course.title}>
              <span className="item-title">{course.title}</span>
              <br />
              {course.offerings.map((offering) => (
                <span key={offering}>
                  <span className="item-meta">{offering}</span>
                  <br />
                </span>
              ))}
              {course.description}
            </li>
          ))}
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