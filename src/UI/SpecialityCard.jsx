import { Link } from 'react-router-dom';
import { Activity, Brain, HeartPulse, ScanHeart, Bone, Eye, Microscope } from 'lucide-react';
import './specialitycard.css';

const ICONS = {
  Cardiology: HeartPulse,
  Neurology: Brain,
  Orthopedics: Bone,
  Ophthalmology: Eye,
  Research: Microscope,
  default: Activity,
};

function getIcon(title) {
  const key = Object.keys(ICONS).find((entry) => entry !== 'default' && title.includes(entry));
  return ICONS[key] || ScanHeart;
}

export default function SpecialityCard({ title, description, to = '/specialities' }) {
  const Icon = getIcon(title);

  return (
    <Link to={to} className="speciality-card glass-panel glass-inset-line">
      <div className="speciality-card__top">
        <span className="speciality-card__number">01</span>
        <span className="speciality-card__icon">
          <Icon size={20} strokeWidth={2} />
        </span>
      </div>

      <div className="speciality-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="speciality-card__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
          <path
            d="M7 17L17 7M17 7H9M17 7v8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
