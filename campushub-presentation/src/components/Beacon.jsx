import { useState } from 'react';
import { Section } from './Section.jsx';
import { useInView } from '../hooks.js';
import { BEACON } from '../content.js';

function classify(rssi) {
  if (rssi >= BEACON.arrived) return 'arrived';
  if (rssi >= BEACON.near) return 'near';
  return 'far';
}

const LABEL = { arrived: 'Arrived', near: 'Near', far: 'Far', off: 'Nothing in range' };

export default function Beacon({ meta }) {
  const [ref, seen] = useInView(0.3);
  const [rssi, setRssi] = useState(-90);
  const [on, setOn] = useState(true);
  const [minor, setMinor] = useState(BEACON.rooms[0].minor);

  const zone = on ? classify(rssi) : 'off';
  const room = BEACON.rooms.find((r) => r.minor === minor);
  const span = BEACON.max - BEACON.min;
  const pct = (v) => ((v - BEACON.min) / span) * 100;

  return (
    <Section meta={meta} theme="dark" className="beacon">
      <div ref={ref} className={`beacon-grid ${seen ? 'in' : ''}`}>
        <div className="beacon-left">
          <h2>{BEACON.headline}</h2>
          <p className="lead">{BEACON.lead}</p>
          <div className="stages rv" style={{ '--i': 1 }}>
            {BEACON.stages.map((s, i) => (
              <div className="stage" key={s.label}>
                <strong>{s.label}</strong>
                <span>{s.text}</span>
                {i === 0 && <i aria-hidden="true" className="stage-arrow" />}
              </div>
            ))}
          </div>
          <ol className="pipeline">
            {BEACON.pipeline.map((p, i) => (
              <li key={p} className="rv" style={{ '--i': i + 2 }}>
                {p}
              </li>
            ))}
          </ol>
        </div>

        <div className="sim rv" style={{ '--i': 3 }}>
          <h3>Try the classifier</h3>

          <div className={`rings ${zone}`} aria-hidden="true">
            <svg viewBox="0 0 240 160">
              <g transform="translate(120 80)">
                {[1, 2, 3].map((n) => (
                  <circle key={n} r={14 + n * 18} className={`ringc c${n}`} />
                ))}
                <circle r="9" className="core" />
              </g>
            </svg>
          </div>

          <div className="result" aria-live="polite">
            <span className={`verdict ${zone}`}>{LABEL[zone]}</span>
            <span className="where">
              {on ? `${BEACON.major}:${minor}, ${room.name}` : 'No beacon heard for 5 seconds'}
            </span>
          </div>

          <label className="slider">
            <span>
              Signal strength <b>{rssi} dBm</b>
            </span>
            <input
              type="range"
              min={BEACON.min}
              max={BEACON.max}
              value={rssi}
              disabled={!on}
              onChange={(e) => setRssi(Number(e.target.value))}
            />
            <span className="bands" aria-hidden="true">
              <span style={{ width: `${pct(BEACON.near)}%` }}>far</span>
              <span style={{ width: `${pct(BEACON.arrived) - pct(BEACON.near)}%` }}>near</span>
              <span style={{ width: `${100 - pct(BEACON.arrived)}%` }}>arrived</span>
            </span>
          </label>

          <div className="controls">
            <div className="seg-btns" role="group" aria-label="Beacon Minor value">
              {BEACON.rooms.map((r) => (
                <button
                  key={r.minor}
                  type="button"
                  className={r.minor === minor ? 'on' : ''}
                  aria-pressed={r.minor === minor}
                  onClick={() => setMinor(r.minor)}
                >
                  Minor {r.minor}
                </button>
              ))}
            </div>
            <button type="button" className={`toggle ${on ? 'on' : ''}`} aria-pressed={on} onClick={() => setOn((o) => !o)}>
              {on ? 'Beacon on' : 'Beacon off'}
            </button>
          </div>

          <p className="fine">{BEACON.honest}</p>
        </div>
      </div>
    </Section>
  );
}
