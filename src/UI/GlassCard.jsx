import './glasscard.css';

export default function GlassCard({
  as: Component = 'article',
  className = '',
  children,
  ...props
}) {
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--glow-x', `${x}%`);
    event.currentTarget.style.setProperty('--glow-y', `${y}%`);
    event.currentTarget.style.setProperty('--glow-opacity', '1');
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty('--glow-opacity', '0');
  };

  return (
    <Component
      className={`glass-card glass-panel glass-inset-line ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </Component>
  );
}
