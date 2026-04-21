import './organicon.css';

const organMap = {
  lungs: {
    viewBox: '0 0 120 120',
    content: (
      <>
        <g className="organ-core">
          <path data-organ-fill d="M57 18c-8 8-12 17-12 28v12c0 14 5 27 14 36l1 1c-14 2-28-2-38-13C9 69 11 46 26 33c9-8 20-12 31-15z" />
          <path data-organ-fill d="M63 18c11 3 22 7 31 15 15 13 17 36 4 49-10 11-24 15-38 13l1-1c9-9 14-22 14-36V46c0-11-4-20-12-28z" />
          <path data-organ-line d="M60 16v44" />
          <path data-organ-line d="M60 44c-5 4-8 10-8 18" />
          <path data-organ-line d="M60 44c5 4 8 10 8 18" />
          <path data-organ-line d="M52 56l-9 8" />
          <path data-organ-line d="M68 56l9 8" />
          <path data-organ-line d="M50 68l-12 10" />
          <path data-organ-line d="M70 68l12 10" />
          <circle data-organ-accent cx="60" cy="17" r="4" />
        </g>
      </>
    ),
  },
  brain: {
    viewBox: '0 0 120 120',
    content: (
      <g className="organ-core">
        <path data-organ-fill d="M57 25c-9-6-22-2-26 8-7 0-13 6-13 14 0 4 1 7 4 10-2 3-3 6-3 10 0 10 8 18 18 18h42c13 0 23-10 23-23 0-8-4-15-10-19 0-11-9-20-20-20-3 0-6 1-9 2-3-4-8-6-13-6-5 0-10 2-13 6z" />
        <path data-organ-line d="M60 30v54" />
        <path data-organ-line d="M44 37c-8 2-13 9-13 17" />
        <path data-organ-line d="M76 37c8 2 13 9 13 17" />
        <path data-organ-line d="M46 55c4 2 6 6 6 10" />
        <path data-organ-line d="M74 55c-4 2-6 6-6 10" />
        <path data-organ-line d="M42 69c7 0 12 5 12 11" />
        <path data-organ-line d="M78 69c-7 0-12 5-12 11" />
      </g>
    ),
  },
  kidney: {
    viewBox: '0 0 120 120',
    content: (
      <g className="organ-core">
        <path data-organ-fill d="M46 24c-11 0-21 9-21 23 0 11 7 21 18 28 5 3 7 8 7 13v7c0 3 2 5 5 5 4 0 6-2 6-6V66c0-7-2-13-5-19-3-5-4-10-4-15 0-5 1-8 4-8 2 0 4 2 4 5v17" />
        <path data-organ-fill d="M74 24c11 0 21 9 21 23 0 11-7 21-18 28-5 3-7 8-7 13v7c0 3-2 5-5 5-4 0-6-2-6-6V66c0-7 2-13 5-19 3-5 4-10 4-15 0-5-1-8-4-8-2 0-4 2-4 5v17" />
        <path data-organ-line d="M60 28v66" />
        <path data-organ-line d="M44 39c-6 4-8 11-8 17" />
        <path data-organ-line d="M76 39c6 4 8 11 8 17" />
        <circle data-organ-accent cx="60" cy="59" r="4.5" />
      </g>
    ),
  },
  dna: {
    viewBox: '0 0 120 120',
    content: (
      <g className="organ-core">
        <path data-organ-line d="M40 18c18 12 18 24 0 36-18 12-18 24 0 36" />
        <path data-organ-line d="M80 18c-18 12-18 24 0 36 18 12 18 24 0 36" />
        <path data-organ-line d="M45 24h30" />
        <path data-organ-line d="M40 40h40" />
        <path data-organ-line d="M45 56h30" />
        <path data-organ-line d="M40 72h40" />
        <path data-organ-line d="M45 88h30" />
        <path data-organ-fill d="M34 16h52v88H34z" opacity="0.08" />
      </g>
    ),
  },
};

export default function OrganIcon({ type = 'lungs', className = '', title }) {
  const organ = organMap[type] || organMap.lungs;

  return (
    <svg
      className={`organ-icon organ-glass ${className}`.trim()}
      viewBox={organ.viewBox}
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <filter id="organ-glass-filter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blurred" />
          <feColorMatrix
            in="blurred"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0.04
                    0 0 1 0 0.08
                    0 0 0 18 -7"
            result="glassAlpha"
          />
          <feSpecularLighting in="glassAlpha" surfaceScale="5" specularConstant="0.9" specularExponent="20" lightingColor="#ffffff" result="specLight">
            <fePointLight x="20" y="16" z="70" />
          </feSpecularLighting>
          <feComposite in="specLight" in2="SourceAlpha" operator="in" result="specMask" />
          <feBlend in="SourceGraphic" in2="specMask" mode="screen" />
        </filter>
        <linearGradient id="organ-fill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="45%" stopColor="rgba(20,184,166,0.3)" />
          <stop offset="100%" stopColor="rgba(37,99,235,0.22)" />
        </linearGradient>
      </defs>
      {organ.content}
    </svg>
  );
}
