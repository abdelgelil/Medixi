import { Link } from 'react-router-dom';
import { Activity, CalendarRange, MoveUpRight, ShieldCheck } from 'lucide-react';
import Badge from '../UI/Badge';
import GlassCard from '../UI/GlassCard';
import OrganIcon from '../UI/OrganIcon';
import StatCard from '../UI/StatCard';
import SpecialityCard from '../UI/SpecialityCard';
import { specialties } from '../data/siteData';
import './Home.css';

const stats = [
  { value: '$250M', label: 'Healthcare funding support' },
  { value: '20M+', label: 'Patients served globally' },
  { value: '95%', label: 'Learner satisfaction score' },
  { value: '200+', label: 'Clinical faculty members' },
];

const heroFeatures = [
  { title: 'Brain Health Check', type: 'brain' },
  { title: 'DNA Learning Paths', type: 'dna' },
  { title: 'Kidney Health Scan', type: 'kidney' },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section clinical-mesh">
        <div className="container hero-layout">
          <div className="hero-copy">
            <Badge text="Clinical Innovation" />
            <h1 className="hero-headline">
              Glassmorphic
              <br />
              Clinical Learning
            </h1>
            <p className="hero-subheadline">
              MEDIXI blends hands-on medical education, clinical precision, and modern dashboard-inspired design for
              physicians, institutions, and specialty partners.
            </p>
            <div className="hero-btns">
              <Link to="/registration" className="btn-primary">
                Register Now
                <span className="btn-arrow">
                  <MoveUpRight size={14} />
                </span>
              </Link>
              <Link to="/calendar" className="btn-outline">
                View Calendar
              </Link>
            </div>
          </div>

          <div className="hero-grid">
            <GlassCard className="hero-card hero-card--feature">
              <div className="hero-card__eyebrow">
                <span className="hero-card__pill">Fast Treatment</span>
                <Activity size={18} />
              </div>
              <div className="hero-card__feature">
                <div className="hero-card__feature-copy">
                  <h2>Clinical intelligence built for hands-on medical education.</h2>
                  <p>
                    Premium glass panels, accessible contrast, and a refined clinical tone give the platform a
                    dashboard-like feel without relying on heavy 3D libraries.
                  </p>
                </div>
                <div className="hero-card__organ-wrap">
                  <div className="hero-card__organ-shell">
                    <OrganIcon type="lungs" title="Medical lungs illustration" />
                  </div>
                  <div className="hero-card__metric hero-card__metric--top">22 Years medical excellence</div>
                  <div className="hero-card__metric hero-card__metric--side">6700 learners reached</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="hero-card hero-card--summary">
              <div className="hero-card__summary-top">
                <span className="hero-card__pill hero-card__pill--teal">Blueprint</span>
                <ShieldCheck size={18} />
              </div>
              <h3>Medical design system with glass depth and responsive structure.</h3>
              <p>
                Reusable cards, frosted organ icons, a mesh gradient hero, and a higher-end navigation treatment.
              </p>
              <Link to="/programs" className="hero-inline-link">
                Explore Programs
                <MoveUpRight size={15} />
              </Link>
            </GlassCard>

            {heroFeatures.map((feature) => (
              <GlassCard key={feature.title} className="hero-card hero-card--tile">
                <span className="hero-card__tile-arrow">
                  <MoveUpRight size={15} />
                </span>
                <div className="hero-card__tile-icon">
                  <OrganIcon type={feature.type} title={feature.title} />
                </div>
                <h3>{feature.title}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <GlassCard className="stats-shell">
            <div className="stats-grid">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="home-spotlight-section">
        <div className="container home-spotlight-grid">
          <GlassCard className="home-spotlight-card">
            <div className="home-spotlight-card__header">
              <Badge text="Appointment" />
              <CalendarRange size={18} />
            </div>
            <h2>Navigable clinical journeys with premium surfaces.</h2>
            <p>
              The system is designed to move users logically from discovery to registration while keeping visuals calm,
              precise, and unmistakably medical.
            </p>
            <div className="home-spotlight-card__actions">
              <Link to="/registration" className="btn-primary">Start Registration</Link>
              <Link to="/contact" className="btn-outline">Contact Team</Link>
            </div>
          </GlassCard>

          <GlassCard className="home-spotlight-card home-spotlight-card--visual">
            <div className="home-spotlight-card__organ-row">
              <OrganIcon type="dna" title="DNA visual" />
              <OrganIcon type="brain" title="Brain visual" />
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="specialties-section">
        <div className="container">
          <div className="section-header section-header--home">
            <div>
              <Badge text="Departments" />
              <h2>Explore Our Medical Departments</h2>
            </div>
            <p>
              Clinical program cards styled as premium glass surfaces with softer organography and high-contrast
              typography for medical professionals.
            </p>
          </div>
          <div className="specialties-grid">
            {specialties.slice(0, 8).map((item) => (
              <SpecialityCard
                key={item.id}
                title={item.title}
                description={item.focus}
                to={`/specialities#${item.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
