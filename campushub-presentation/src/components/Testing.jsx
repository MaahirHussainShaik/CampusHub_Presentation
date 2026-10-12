import { Section } from './Section.jsx';
import { useCountUp, useInView } from '../hooks.js';
import { TESTS } from '../content.js';

export default function Testing({ meta }) {
  const [ref, seen] = useInView(0.3);
  const flutter = useCountUp(TESTS.flutter, seen);
  const api = useCountUp(TESTS.api, seen);

  return (
    <Section meta={meta} theme="light" className="testing">
      <div ref={ref} className={`testing-grid ${seen ? 'in' : ''}`}>
        <div className="testing-left">
          <h2>{TESTS.flutter + TESTS.api} automated tests, and what they don&rsquo;t cover</h2>
          <div className="counts">
            <div className="count">
              <span className="num">{flutter}</span>
              <span className="cap">Flutter tests passed, analysis clean</span>
            </div>
            <div className="count">
              <span className="num">{api}</span>
              <span className="cap">API tests passed in 6 files, typecheck and build clean</span>
            </div>
          </div>
          <ol className="pyramid" aria-label="Test pyramid">
            {TESTS.pyramid.map((t, i) => (
              <li key={t} style={{ '--w': `${[44, 72, 100][i]}%`, '--i': i }}>
                {t}
              </li>
            ))}
          </ol>
          <p className="console">
            <span>{TESTS.console[0].k}</span> {TESTS.console[0].v}
            <br />
            <span>{TESTS.console[1].k}</span> <b>{TESTS.console[1].v}</b>
            <i>Firestore Rules Playground</i>
          </p>
          <p className="fine">Verified at commit {TESTS.commit}.</p>
        </div>

        <div className="testing-right">
          <div className="test-cols">
            {TESTS.columns.map((c, i) => (
              <article className="test-col rv" style={{ '--i': i + 1 }} key={c.head}>
                <h3>{c.head}</h3>
                <p className="sub">{c.sub}</p>
                <ul className="plain">
                  {c.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="bug rv" style={{ '--i': 4 }}>
            {TESTS.bug}
          </p>
          <div className="limits rv" style={{ '--i': 5 }}>
            <strong>Honest limits</strong>
            <ul>
              {TESTS.limits.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
