import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
