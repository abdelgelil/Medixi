import './PageStyles.css';
import './Insights.css';

export default function Insights() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Insights</span>
            <h1 className="page-hero__title">Insights</h1>
            <p className="page-hero__text">
              For testimonials and pictures to be added later.
            </p>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">Planned content</div>
            <h3>Testimonials and pictures</h3>
            <p>This section is intentionally reserved for the materials mentioned in the brief.</p>
            <ul className="page-hero__panel-list">
              <li>Testimonials to be added later</li>
              <li>Pictures to be added later</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container">
          <div className="info-card insights-placeholder">
            <div className="info-card__tag">Placeholder</div>
            <h3>For testimonials and pictures to be added later.</h3>
            <p>The page structure is ready for the final assets when they are supplied.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
