import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Specialities', to: '/specialities' },
  { label: 'Programs', to: '/programs' },
  { label: 'Calendar', to: '/calendar' },
  { label: 'Registration', to: '/registration' },
  { label: 'Partners', to: '/partners' },
  { label: 'Insights', to: '/insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar glass-panel${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
            <span className="navbar__logo-icon">
              <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path
                  d="M14 2C7.37 2 2 7.37 2 14s5.37 12 12 12 12-5.37 12-12S20.63 2 14 2z"
                  fill="#0f172a"
                />
                <path
                  d="M14 7v14M7 14h14"
                  stroke="#14b8a6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="navbar__logo-text">MEDIXI</span>
          </Link>

          <nav className="navbar__links" aria-label="Primary">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link to="/registration" className="navbar__cta" aria-label="Register now">
            <span className="navbar__cta-dot" aria-hidden="true" />
            Register Now
            <span className="navbar__cta-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 12L12 2M12 2H5M12 2v7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu glass-panel${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__links">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/registration" className="mobile-menu__cta btn-primary" onClick={() => setMenuOpen(false)}>
            Register Now
            <span className="btn-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 12L12 2M12 2H5M12 2v7"
                  stroke="#f8fafc"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </nav>
      </div>

      {menuOpen ? (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      ) : null}
    </>
  );
}
