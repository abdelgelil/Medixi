import './PageStyles.css';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Contact Us</span>
            <h1 className="page-hero__title">Contact Us</h1>
            <p className="page-hero__text">
              Contact details from the project document.
            </p>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">Contacts</div>
            <h3>Salma Khairy and Noha Ghanem</h3>
            <p>Use the listed email addresses and phone numbers exactly as provided in the brief.</p>
            <ul className="page-hero__panel-list">
              <li>salma.khairy@icomgroup.org</li>
              <li>noha.ghanem@icomgroup.org</li>
              <li>Direct phone contact is available</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container page-grid contact-grid">
          <article className="info-card">
            <div className="info-card__tag">Contact</div>
            <h3>Salma Khairy</h3>
            <p><a className="contact-link" href="mailto:salma.khairy@icomgroup.org">salma.khairy@icomgroup.org</a></p>
            
          </article>

          <article className="info-card">
            <div className="info-card__tag">Contact</div>
            <h3>Noha Ghanem</h3>
            <p><a className="contact-link" href="mailto:noha.ghanem@icomgroup.org">noha.ghanem@icomgroup.org</a></p>
           
          </article>
        </div>
      </section>
    </div>
  );
}
