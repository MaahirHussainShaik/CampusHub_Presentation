function mmss(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

export default function NotesPanel({ open, section }) {
  if (!open || !section) return null;
  return (
    <aside className="notes" aria-label="Speaker notes">
      <div className="notes-head">
        <strong>{section.rail}</strong>
        <span>
          {section.speakers.join(', ')}
          {section.seconds ? `, about ${mmss(section.seconds)}` : ''}
        </span>
      </div>
      <ul>
        {section.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      {section.link && (
        <a href={section.link.href} target="_blank" rel="noreferrer">
          {section.link.label}
        </a>
      )}
      <p className="notes-keys">
        Down, right or Space: next. Up or left: back. N: notes. T: timer (T again pauses). Shift+R: reset timer.
      </p>
    </aside>
  );
}
