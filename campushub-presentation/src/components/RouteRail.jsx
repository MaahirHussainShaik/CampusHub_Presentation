export default function RouteRail({ sections, activeId, onJump }) {
  return (
    <nav className="rail" aria-label="Presentation sections">
      <div className="rail-track">
        <div className="rail-fill" />
        <div className="rail-pin" />
      </div>
      <ol>
        {sections.map((s, i) => (
          <li
            key={s.id}
            className={s.id === activeId ? 'active' : ''}
            style={{ top: `${(i / (sections.length - 1)) * 100}%` }}
          >
            <button type="button" onClick={() => onJump(s.id)} aria-label={s.rail}>
              <span className="dot" />
              <span className="tag">{s.rail}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
