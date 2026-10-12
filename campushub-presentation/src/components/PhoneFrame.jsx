import { useState } from 'react';

// Stylised stand-ins, shown until a real screenshot exists in public/screens/.
function Schematic({ variant }) {
  if (variant === 'feed') {
    return (
      <svg viewBox="0 0 200 400" aria-hidden="true">
        <rect width="200" height="56" fill="var(--navy)" />
        <rect x="16" y="22" width="80" height="12" rx="6" fill="var(--sign)" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(14 ${74 + i * 102})`}>
            <rect width="172" height="92" rx="8" fill="#fff" stroke="#c9d2cf" />
            <rect x="12" y="12" width="96" height="10" rx="5" fill="var(--navy)" />
            <rect x="12" y="32" width="140" height="7" rx="3.5" fill="#c9d2cf" />
            <rect x="12" y="46" width="110" height="7" rx="3.5" fill="#c9d2cf" />
            <rect x="12" y="66" width="52" height="16" rx="8" fill="var(--route)" />
          </g>
        ))}
      </svg>
    );
  }
  if (variant === 'timetable') {
    return (
      <svg viewBox="0 0 200 400" aria-hidden="true">
        <rect width="200" height="56" fill="var(--navy)" />
        <rect x="16" y="22" width="70" height="12" rx="6" fill="var(--sign)" />
        {[
          [70, 56, 'var(--route)'],
          [136, 44, 'var(--route)'],
          [190, 70, 'var(--sign)'],
          [268, 52, 'var(--route)'],
          [328, 44, 'var(--route)'],
        ].map(([y, h, c]) => (
          <rect key={y} x="46" y={y} width="140" height={h} rx="8" fill={c} opacity={c === 'var(--sign)' ? 1 : 0.85} />
        ))}
        {[70, 136, 190, 268, 328].map((y) => (
          <rect key={y} x="14" y={y + 4} width="24" height="7" rx="3.5" fill="#c9d2cf" />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 400" aria-hidden="true">
      <rect width="200" height="400" fill="#dfe8e4" />
      <path d="M0 120 L200 90 M0 250 L200 220 M60 0 L90 400 M140 0 L120 400" stroke="#fff" strokeWidth="9" />
      <path d="M40 330 Q70 250 110 220 T150 120" fill="none" stroke="var(--route)" strokeWidth="4" strokeDasharray="8 7" />
      <circle cx="40" cy="330" r="9" fill="var(--route)" />
      <circle cx="150" cy="120" r="26" fill="none" stroke="var(--sign)" strokeWidth="3" opacity=".6" />
      <circle cx="150" cy="120" r="14" fill="none" stroke="var(--sign)" strokeWidth="3" />
      <circle cx="150" cy="120" r="6" fill="var(--navy)" />
      <rect x="0" y="0" width="200" height="56" fill="var(--navy)" />
      <rect x="16" y="22" width="76" height="12" rx="6" fill="var(--sign)" />
    </svg>
  );
}

export default function PhoneFrame({ name, file, variant, style }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="phone" style={style}>
      <div className="phone-screen">
        {!failed && <img src={`/screens/${file}`} alt={`${name} screen of CampusHub`} onError={() => setFailed(true)} />}
        {failed && <Schematic variant={variant} />}
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}
