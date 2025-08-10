function Contact() {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title has-text-centered">📬 Contact Me</h1>

        {/* Contact Form */}
        <div className="box">
          <h2 className="subtitle">✉️ Send a Message</h2>
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Your name" />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Your email" />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Your message"></textarea>
              </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link" type="submit" disabled>
                  Send (Inactive)
                </button>
              </div>
            </div>
          </form>
          <p className="has-text-grey is-size-7 mt-2">
            This form is currently inactive. Please use the direct contact options below.
          </p>
        </div>

        {/* Direct Contact Info */}
        <div className="box">
          <h2 className="subtitle">📡 Direct Contact</h2>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:faycal.djebari@univ-bejaia.dz">
                faycal.djebari@univ-bejaia.dz
              </a>
            </li>
            <li>
              <strong>ResearchGate:</strong>{' '}
              <a
                href="https://www.researchgate.net/profile/Faycal-Djebari"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
