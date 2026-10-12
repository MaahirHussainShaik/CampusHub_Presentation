import { useRef } from 'react';
import { Section } from './Section.jsx';
import PhoneFrame from './PhoneFrame.jsx';
import { useInView, useOnScroll } from '../hooks.js';
import { BUILT_FOOTNOTE, PILLARS } from '../content.js';

export default function Built({ meta }) {
  const [ref, seen] = useInView(0.3);
  const sectionRef = useRef(null);

  // --sp runs 0 to 1 while the section crosses the screen. The phones drift against it.
  useOnScroll(() => {
    const el = sectionRef.current;
    if (!el) return;
    const vh = window.innerHeight;
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
    el.style.setProperty('--sp', p.toFixed(4));
  });

  return (
    <div ref={sectionRef}>
      <Section meta={meta} theme="light" className="built">
        <div ref={ref} className={`built-grid ${seen ? 'in' : ''}`}>
          <div>
            <h2>Everything between the feed and the room</h2>
            <div className="pillars">
              {PILLARS.map((p, i) => (
                <article className="pillar rv" style={{ '--i': i + 1 }} key={p.name}>
                  <h3 className="sign">{p.name}</h3>
                  <ul className="plain">
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="foot rv" style={{ '--i': 4 }}>
              {BUILT_FOOTNOTE}
            </p>
          </div>
          <div className="phones" aria-label="App screens">
            <PhoneFrame name="Feed" file="feed.png" variant="feed" style={{ '--k': 1 }} />
            <PhoneFrame name="Timetable" file="timetable.png" variant="timetable" style={{ '--k': -1.4 }} />
            <PhoneFrame name="Navigate" file="navigate.png" variant="navigate" style={{ '--k': 0.8 }} />
          </div>
        </div>
      </Section>
    </div>
  );
}
