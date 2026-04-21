import { Link, useLocation } from 'react-router-dom';
import { registrationInfo } from '../data/siteData';
import './PageStyles.css';
import './Registration.css';

function formatEventName(value) {
  if (!value) {
    return 'Selected workshop';
  }

  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Registration() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const eventName = formatEventName(params.get('event'));

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Registration</span>
            <h1 className="page-hero__title">Registration</h1>
            <p className="page-hero__text">
              {eventName}
            </p>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">Registration details</div>
            <h3>{registrationInfo.fees}</h3>
            <p>Please confirm the final fees with the coordination team before payment.</p>
            <ul className="page-hero__panel-list">
              <li>{registrationInfo.linkLabel}</li>
              <li>Workshop-specific registration support is available</li>
              <li>Contact details are listed below</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container page-grid">
          <article className="info-card registration-summary-card">
            <div className="info-card__tag">Fees</div>
            <h3>{registrationInfo.fees}</h3>
            <p>
              The brief includes a fees section but does not provide the fee amounts in the supplied document.
            </p>
          </article>

          <article className="info-card registration-summary-card">
            <div className="info-card__tag">Registration Link</div>
            <h3>{registrationInfo.linkLabel}</h3>
            <p>{registrationInfo.linkNote}</p>
            <div className="registration-links">
              <Link to={registrationInfo.linkHref} className="btn-primary">Open Contact Us</Link>
              <Link to="/calendar" className="btn-outline">Back to Calendar</Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
