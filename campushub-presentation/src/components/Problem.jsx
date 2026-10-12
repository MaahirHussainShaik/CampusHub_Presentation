import { Section } from './Section.jsx';
import { useInView } from '../hooks.js';
import { PROBLEM } from '../content.js';

function Track({ track, kind, seen, offset }) {
  return (
    <div className={`track ${kind}`}>
      <div className="track-name">
        <strong>{track.name}</strong>
        <span>{track.note}</span>
      </div>
      <ol className="track-line">
        {PROBLEM.steps.map((s, i) => {
          const reached = i < track.reach;
          return (
            <li key={s} className={reached ? 'reached' : 'missing'}>
              {i > 0 && (
                <span
                  className="seg"
                  style={{ '--delay': `${(offset + i) * 0.35}s` }}
                  data-on={reached && seen ? 'true' : 'false'}
                />
              )}
              <span className="node" />
              <span className="node-label">{s}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function Problem({ meta }) {
  const [ref, seen] = useInView(0.3);
  return (
    <Section meta={meta} theme="light" className="problem">
      <div ref={ref} className={seen ? 'in' : ''}>
        <div className="problem-top">
          <div>
            <h2>{PROBLEM.headline}</h2>
            <p className="hook rv" style={{ '--i': 1 }}>
              {PROBLEM.hook}
            </p>
          </div>
          <div className="personas">
            {PROBLEM.personas.map((p, i) => (
              <article className="persona rv" style={{ '--i': i + 2 }} key={p.who}>
                <h3>{p.who}</h3>
                <p className="context">{p.context}</p>
                <ul className="plain">
                  {p.wants.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="gap rv" style={{ '--i': 4 }}>
          <Track track={PROBLEM.others} kind="others" seen={seen} offset={0} />
          <Track track={PROBLEM.ours} kind="ours" seen={seen} offset={1} />
        </div>
      </div>
    </Section>
  );
}
