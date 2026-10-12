import { Section } from './Section.jsx';
import { useInView } from '../hooks.js';
import { LESSONS as L } from '../content.js';

export default function Lessons({ meta }) {
  const [ref, seen] = useInView(0.3);
  const cols = [L.learned, L.notBuilt, L.next];
  return (
    <Section meta={meta} theme="light" className="lessons">
      <div ref={ref} className={seen ? 'in' : ''}>
        <h2>{L.headline}</h2>
        <div className="lesson-cols">
          {cols.map((c, i) => (
            <article key={c.head} className="rv" style={{ '--i': i + 1 }}>
              <h3 className={i === 1 ? 'warn' : ''}>{c.head}</h3>
              <ul className="plain">
                {c.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="beyond rv" style={{ '--i': 4 }}>
          <strong>{L.beyond.head}</strong>
          <ul>
            {L.beyond.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
