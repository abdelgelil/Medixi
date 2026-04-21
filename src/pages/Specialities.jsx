import { Link } from 'react-router-dom';
import { specialties } from '../data/siteData';
import './PageStyles.css';
import './Specialities.css';

export default function Specialities() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Specialities</span>
            <h1 className="page-hero__title">Specialty tracks designed around practical application.</h1>
            <p className="page-hero__text">
              This page helps users quickly scan the full clinical scope of MEDIXI, then move into programs,
              registration, or contact depending on how ready they are.
            </p>
            <div className="page-hero__actions">
              <Link to="/programs" className="btn-primary">See Program Formats</Link>
              <Link to="/registration" className="btn-outline">Register Interest</Link>
            </div>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">Navigation goal</div>
            <h3>Specialty details should anchor users to the right next page.</h3>
            <p>Each card below includes a direct path into registration or broader program discovery.</p>
            <ul className="page-hero__panel-list">
              <li>Hash-link support from footer</li>
              <li>Full specialty coverage</li>
              <li>Clear onward actions</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container specialities-grid-page">
          {specialties.map((specialty) => (
            <article key={specialty.id} id={specialty.id} className="info-card speciality-detail-card">
              <div className="info-card__tag">Specialty track</div>
              <h3>{specialty.title}</h3>
              <p>{specialty.focus}</p>
              <div className="speciality-detail-card__actions">
                <Link to="/registration" className="btn-primary">Register Interest</Link>
                <Link to="/programs" className="btn-outline">View Programs</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
