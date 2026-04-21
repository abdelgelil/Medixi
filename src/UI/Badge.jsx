import './badge.css';

export default function Badge({ text }) {
  return (
    <div className="badge-wrapper">
      <span className="medical-badge">
        <span className="badge-dot" />
        {text}
      </span>
    </div>
  );
}
