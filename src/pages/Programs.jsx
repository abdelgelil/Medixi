import { Link } from 'react-router-dom';
import { programs } from '../data/siteData';
import './PageStyles.css';
import './Programs.css';

export default function Programs() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Programs</span>
            <h1 className="page-hero__title">Choose a training format that fits real schedules.</h1>
            <p className="page-hero__text">
              The programs page should be the strongest discovery point in the site. It helps users compare formats,
              understand audience fit, and route cleanly into the calendar or registration flow.
            </p>
            <div className="page-hero__actions">
              <Link to="/calendar" className="btn-primary">Check Upcoming Dates</Link>
              <Link to="/registration" className="btn-outline">Register Now</Link>
            </div>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">Program logic</div>
            <h3>Discover first, compare second, register third.</h3>
            <p>This keeps decision-making simple and gives each CTA a clear purpose.</p>
            <ul className="page-hero__panel-list">
              <li>Audience-focused descriptions</li>
              <li>Simple next-step actions</li>
              <li>Consistent theme and hierarchy</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container list-grid">
          {programs.map((program) => (
            <article key={program.title} className="list-card programs-list-card">
              <div className="info-card__tag">Program format</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="programs-list-card__audience">Best for: {program.audience}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--tint">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band__content">
              <h2>Found the right format?</h2>
              <p>Move into the event calendar if you want exact dates, or register directly if you are ready now.</p>
            </div>
            <div className="cta-band__actions">
              <Link to="/calendar" className="btn-primary">Open Calendar</Link>
              <Link to="/registration" className="btn-light">Go to Registration</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
