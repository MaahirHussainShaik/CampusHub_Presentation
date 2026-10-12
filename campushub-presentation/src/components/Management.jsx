import { PinnedSection } from './Section.jsx';
import { MANAGEMENT as M } from '../content.js';

function Plan() {
  return (
    <div className="plan">
      <div className="sprints">
        {M.sprints.map((s) => (
          <article key={s.name} className="sprint">
            <h4>{s.name}</h4>
            <ul className="plain">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <ol className="board" aria-label="Board columns">
        {M.board.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ol>
      <ul className="plain notes-list">
        {M.planNotes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function Workflow() {
  return (
    <div className="workflow">
      <ol className="gates">
        {M.flow.map((f) => (
          <li key={f.head}>
            <strong>{f.head}</strong>
            <span>{f.text}</span>
          </li>
        ))}
      </ol>
      <ul className="prs" aria-label="Pull requests">
        {M.prs.map(([n, t]) => (
          <li key={n}>
            <b>{n}</b> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Obstacles() {
  return (
    <div className="obstacles">
      <ul className="hurdles">
        {M.obstacles.map((o) => (
          <li key={o.head}>
            <strong>{o.head}</strong>
            <span>{o.text}</span>
          </li>
        ))}
      </ul>
      <ol className="meets" aria-label="Meetings">
        {M.meetings.map(([d, t]) => (
          <li key={d}>
            <b>{d}</b> {t}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Management({ meta }) {
  return (
    <PinnedSection meta={meta} theme="light" steps={3} className="mgmt">
      {(step) => (
        <div className="mgmt-grid">
          <div className="mgmt-head">
            <h2>{M.headline}</h2>
            <div className="tabs" role="tablist" aria-label="Project management topics">
              {M.tabs.map((t, i) => (
                <span key={t} role="tab" aria-selected={i === step} className={i === step ? 'on' : ''}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mgmt-body" key={step}>
            {step === 0 && <Plan />}
            {step === 1 && <Workflow />}
            {step === 2 && <Obstacles />}
          </div>
        </div>
      )}
    </PinnedSection>
  );
}
