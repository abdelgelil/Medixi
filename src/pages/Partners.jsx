import { Link } from 'react-router-dom';
import { partners } from '../data/siteData';
import './PageStyles.css';
import './Partners.css';

export default function Partners() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Partners</span>
            <h1 className="page-hero__title">Partners</h1>
            <p className="page-hero__text">
              Preliminary partner list from the project document.
            </p>
            <div className="page-hero__actions">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
            </div>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">Preliminary</div>
            <h3>Current listed partners</h3>
            <p>The page now reflects the exact partner names supplied in the document.</p>
            <ul className="page-hero__panel-list">
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container list-grid">
          {partners.map((partner) => (
            <article key={partner} className="list-card">
              <h3>{partner}</h3>
              <p>Partner listed in the preliminary project document.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
