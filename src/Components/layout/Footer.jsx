import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_LINKS = {
  Platform: [
    { label: 'Home',          to: '/' },
    { label: 'About',         to: '/about' },
    { label: 'Specialities',  to: '/specialities' },
    { label: 'Programs',      to: '/programs' },
    { label: 'Calendar',      to: '/calendar' },
  ],
  Specialities: [
    { label: 'Cardiology',          to: '/specialities#cardiology' },
    { label: 'Nephrology',          to: '/specialities#nephrology' },
    { label: 'Neurology',           to: '/specialities#neurology' },
    { label: 'Gastroenterology',    to: '/specialities#gastro' },
    { label: 'Vascular Surgery',    to: '/specialities#vascular' },
    { label: 'Orthopedics',         to: '/specialities#ortho' },
  ],
  Programs: [
    { label: 'Registration',        to: '/registration' },
    { label: 'Partners',            to: '/partners' },
    { label: 'Insights',            to: '/insights' },
    { label: 'Contact Us',          to: '/contact' },
  ],
};

const SOCIAL = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Top: Logo + tagline */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="12" fill="#0D2B5E"/>
              <path d="M20 8v24M8 20h24"
                stroke="#3DDB6F" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
            <span className="footer__logo-text">MEDIXI</span>
          </Link>
          <p className="footer__tagline">
            A regional hub for medical training — society-led,<br/>
            practice-focused, technology-enabled.
          </p>
        </div>

        <div className="footer__divider" />

        {/* Middle: Subscribe + links */}
        <div className="footer__body">

          {/* Subscribe */}
          <div className="footer__subscribe">
            <h4 className="footer__subscribe-title">Stay Updated</h4>
            <p className="footer__subscribe-sub">
              Get notified about upcoming workshops and programs.
            </p>
            <div className="footer__subscribe-form">
              <div className="footer__subscribe-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__subscribe-input"
              />
            </div>
            <div className="footer__socials">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-btn"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="footer__col">
              <h5 className="footer__col-title">{group}</h5>
              <ul className="footer__col-links">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="footer__col-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer__col">
            <h5 className="footer__col-title">Contact</h5>
            <ul className="footer__col-links">
              <li>
                <a href="mailto:salma.khairy@icomgroup.org" className="footer__col-link">
                  salma.khairy@icomgroup.org
                </a>
              </li>
              <li>
                <a href="tel:+201050407254" className="footer__col-link">
                  +2 010 504 07254
                </a>
              </li>
              <li style={{ marginTop: '12px' }}>
                
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} MEDIXI Medical Training Center. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="footer__legal-link">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}