import { PinnedSection } from './Section.jsx';
import { DECISIONS, PHASES } from '../content.js';

function Flow({ nodes, bad }) {
  return (
    <div className="flow">
      {nodes.map((n, i) => (
        <span className="flow-item" key={n}>
          {i > 0 && <span className={`flow-arrow ${bad ? 'bad' : 'good'}`} />}
          <span className={`flow-node ${n === 'API' ? 'api' : ''}`}>{n}</span>
        </span>
      ))}
    </div>
  );
}

function Detail({ phase }) {
  if (phase.kind === 'shift') {
    return (
      <div className="detail">
        <p className="shift-lead">{phase.lead}</p>
        <div className="shift">
          <div className="shift-row bad">
            <span className="shift-label">{phase.before.label}</span>
            <Flow nodes={phase.before.flow} bad />
            <span className="shift-verdict">{phase.before.verdict}</span>
          </div>
          <div className="shift-row good">
            <span className="shift-label">{phase.after.label}</span>
            <Flow nodes={phase.after.flow} />
            <span className="shift-verdict">{phase.after.verdict}</span>
          </div>
        </div>
        <p className="foot">{phase.foot}</p>
      </div>
    );
  }
  if (phase.kind === 'decisions') {
    return (
      <div className="detail">
        <div className="decisions" role="table" aria-label="Design decisions">
          <div className="decision head" role="row">
            <span role="columnheader">We chose</span>
            <span role="columnheader">Instead of</span>
            <span role="columnheader">Because</span>
          </div>
          {DECISIONS.map((d) => (
            <div className="decision" role="row" key={d.chose}>
              <strong role="cell">{d.chose}</strong>
              <span role="cell" className="over">{d.over}</span>
              <span role="cell">{d.why}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (phase.kind === 'two') {
    return (
      <div className="detail two">
        {phase.columns.map((c) => (
          <div key={c.head}>
            <h4>{c.head}</h4>
            <ul className="plain">
              {c.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="detail">
      <ul className="plain big">
        {phase.items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Design({ meta }) {
  return (
    <PinnedSection meta={meta} theme="light" steps={PHASES.length} className="design">
      {(step) => (
        <div className="design-grid">
          <div className="design-left">
            <h2>How the idea changed as we built it</h2>
            <ol className="timeline">
              {PHASES.map((p, i) => (
                <li key={p.title} className={i === step ? 'on' : i < step ? 'done' : ''}>
                  <span className="when">{p.when}</span>
                  <span className="what">{p.title}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="design-right" key={step}>
            <p className="phase-when">{PHASES[step].when}</p>
            <h3 className="phase-title">{PHASES[step].title}</h3>
            <Detail phase={PHASES[step]} />
          </div>
        </div>
      )}
    </PinnedSection>
  );
}
