import { PinnedSection } from './Section.jsx';
import { ARCH_CHIPS, ARCH_STEPS } from '../content.js';


// Edges light up in the steps listed in `on`. The last step lights everything.
const EDGES = [
  { id: 'signin', d: 'M260 190 H606', color: 'sign', on: [0], label: [433, 178, 'sign in'] },
  { id: 'reads', d: 'M260 425 H606', color: 'read', on: [1], label: [433, 413, 'live reads'] },
  { id: 'writes', d: 'M260 310 H352', color: 'write', on: [2, 4], label: [306, 298, 'writes'] },
  { id: 'verify', d: 'M532 290 Q578 268 606 224', color: 'write', on: [2, 4], label: [585, 262, 'verify token'] },
  { id: 'admin', d: 'M532 336 Q578 372 606 400', color: 'write', on: [2, 4], label: [583, 366, 'Admin SDK'] },
  { id: 'ble', d: 'M90 80 L106 166', color: 'device', on: [3], dashed: true },
  { id: 'ics', d: 'M250 80 L192 166', color: 'device', on: [3], dashed: true, label: [262, 120, 'downloads .ics'] },
];

const COLORS = { sign: '#ffd23f', read: '#6fa0ff', write: '#43d39b', device: '#f2f6fa' };

function Node({ x, y, w, h, title, sub, dim, hot }) {
  return (
    <g className={`anode ${dim ? 'dim' : ''} ${hot ? 'hot' : ''}`}>
      <rect x={x} y={y} width={w} height={h} rx="12" />
      <text x={x + w / 2} y={y + h / 2 - (sub ? 4 : -6)} textAnchor="middle" className="nt">
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 18} textAnchor="middle" className="ns">
          {sub}
        </text>
      )}
    </g>
  );
}

function Diagram({ step }) {
  const lit = (e) => step === 5 || e.on.includes(step);
  const devicesOn = step === 3 || step === 5;
  return (
    <svg className="arch" viewBox="0 0 820 520" role="img" aria-label="CampusHub architecture diagram">
      <defs>
        {Object.entries(COLORS).map(([k, c]) => (
          <marker key={k} id={`ah-${k}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={c} />
          </marker>
        ))}
      </defs>

      <rect x="30" y="140" width="230" height="300" rx="16" className="group" />
      <text x="46" y="160" className="gl">
        Flutter, one codebase
      </text>

      {EDGES.map((e) => (
        <g key={e.id} className={`edge ${lit(e) ? 'lit' : ''} ${e.dashed ? 'dashed' : ''}`}>
          <path d={e.d} stroke={COLORS[e.color]} markerEnd={`url(#ah-${e.color})`} />
          {e.label && (
            <text x={e.label[0]} y={e.label[1]} textAnchor="middle" fill={COLORS[e.color]}>
              {e.label[2]}
            </text>
          )}
        </g>
      ))}

      <Node x={30} y={30} w={120} h={50} title="iBeacon" sub="room beacon" dim={!devicesOn} hot={devicesOn} />
      <Node x={170} y={30} w={160} h={50} title="UoA timetable" sub=".ics feed" dim={!devicesOn} hot={devicesOn} />
      <Node x={45} y={170} w={200} h={110} title="Android app" sub="student, on a phone" />
      <Node x={45} y={300} w={200} h={110} title="Web dashboard" sub="club lead, in Chrome" />
      <Node x={606} y={150} w={190} h={80} title="Firebase Auth" sub="email and password" />
      <Node x={352} y={265} w={180} h={90} title="CampusHub API" sub="Express + TypeScript" />
      <Node x={606} y={380} w={190} h={90} title="Cloud Firestore" sub="events, rsvps, users" />
      <text x={442} y={377} textAnchor="middle" className="host">
        hosted on Render
      </text>

      <g className={`lock ${step === 4 ? 'on' : ''}`}>
        <rect x="330" y="216" width="224" height="32" rx="9" />
        <text x="442" y="238" textAnchor="middle">
          Lock 1: API checks caller
        </text>
      </g>
      <g className={`lock ${step === 4 ? 'on' : ''}`}>
        <rect x="586" y="480" width="226" height="32" rx="9" />
        <text x="699" y="502" textAnchor="middle">
          Lock 2: rules deny writes
        </text>
      </g>
    </svg>
  );
}

export default function Architecture({ meta }) {
  return (
    <PinnedSection meta={meta} theme="dark" steps={ARCH_STEPS.length} className="arch-section">
      {(step) => {
        const s = ARCH_STEPS[step];
        return (
          <div className="arch-grid">
            <div className="arch-left">
              <h2>Reads go direct. Writes go through the API.</h2>
              <Diagram step={step} />
              <ul className="chips" aria-label="Technologies">
                {ARCH_CHIPS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="arch-right" key={step}>
              <h3>{s.title}</h3>
              {s.body && s.body.map((b) => <p key={b}>{b}</p>)}
              {s.why && (
                <ul className="why">
                  {s.why.map((w) => (
                    <li key={w.head}>
                      <strong>{w.head}</strong>
                      <span>{w.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      }}
    </PinnedSection>
  );
}

