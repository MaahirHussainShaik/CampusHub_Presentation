import { Section } from './Section.jsx';
import { useInView } from '../hooks.js';
import { TEAM } from '../content.js';

export default function Team({ meta }) {
  const [ref, seen] = useInView(0.3);
  return (
    <Section meta={meta} theme="light" className="team">
      <h2>Who built what</h2>
      <div ref={ref} className={`team-grid ${seen ? 'in' : ''}`}>
        {TEAM.map((m, i) => (
          <article className="member" key={m.name} style={{ '--i': i }}>
            <h3 className="wipe">{m.name}</h3>
            <p className="role">{m.role}</p>
            <ul className="plain">
              {m.does.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="speaks">
              <span className="sign sm">Presents</span> {m.speaks}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
