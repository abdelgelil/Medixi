import { Link } from 'react-router-dom';
import './PageStyles.css';
import './About.css';

export default function About() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">About The Center</span>
            <h1 className="page-hero__title">A Regional Hub for Medical Training</h1>
            <p className="page-hero__text">
              Our institute is designed to serve as a center of excellence for practical, society-driven medical
              education.
            </p>
            <div className="page-hero__actions">
              <Link to="/specialities" className="btn-primary">View Specialities</Link>
              <Link to="/programs" className="btn-outline">Browse Programs</Link>
            </div>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">About the center</div>
            <h3>We bridge the gap between theory and real-world clinical practice.</h3>
            <p>
              Through structured academic partnerships and specialty-based curricula, we provide immersive learning
              experiences.
            </p>
            <ul className="page-hero__panel-list">
              <li>Live transmission of complex procedures</li>
              <li>Simulation-based skill development</li>
              <li>Multi-disciplinary case discussions</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container page-grid about-values">
          <article className="info-card">
            <div className="info-card__tag">About the center</div>
            <ul className="about-checklist">
              <li>Live transmission of complex procedures</li>
              <li>Simulation-based skill development</li>
              <li>Multi-disciplinary case discussions</li>
              <li>Evidence-based academic frameworks</li>
              <li>Accredited programs</li>
            </ul>
          </article>

          <article className="info-card info-card--navy">
            <div className="info-card__tag">Our approach</div>
            <h3>Society-Led. Practice-Focused. Technology-Enabled.</h3>
            <p>
              Our educational model is built on collaboration with recognized scientific societies across multiple
              specialties.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section page-section--tint">
        <div className="container page-grid">
          <article className="info-card">
            <div className="info-card__tag">Program development</div>
            <ul className="about-checklist">
              <li>Scientifically validated curricula</li>
              <li>Real-life clinical exposure</li>
              <li>Structured skill progression</li>
              <li>Measurable learning outcomes</li>
            </ul>
          </article>

          <article className="info-card">
            <div className="info-card__tag">Outcome</div>
            <p className="body-lg">We prioritize hands-on experience and procedural confidence.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
