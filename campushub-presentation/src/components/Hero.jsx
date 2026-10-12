import { useEffect, useState } from 'react';
import { Section } from './Section.jsx';
import { TAGLINE } from '../content.js';

// Route points in a 1200 x 230 box. Waypoints are the corners of the route.
const POINTS = [
  [20, 170],
  [230, 120],
  [500, 180],
  [770, 110],
  [990, 170],
  [1130, 100],
];
const WAYPOINTS = [1, 2, 3, 4];
const DELAYS = [0.9, 1.5, 2.1, 2.6];

function roundedPath(points, r) {
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i += 1) {
    const [px, py] = points[i - 1];
    const [cx, cy] = points[i];
    const [nx, ny] = points[i + 1];
    const a = Math.hypot(cx - px, cy - py);
    const b = Math.hypot(nx - cx, ny - cy);
    const ra = Math.min(r, a / 2);
    const rb = Math.min(r, b / 2);
    const sx = cx - ((cx - px) / a) * ra;
    const sy = cy - ((cy - py) / a) * ra;
    const ex = cx + ((nx - cx) / b) * rb;
    const ey = cy + ((ny - cy) / b) * rb;
    d += ` L${sx.toFixed(1)} ${sy.toFixed(1)} Q${cx} ${cy} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  }
  const last = points[points.length - 1];
  return `${d} L${last[0]} ${last[1]}`;
}

export default function Hero({ meta }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setGo(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const d = roundedPath(POINTS, 70);
  const end = POINTS[POINTS.length - 1];

  return (
    <Section meta={meta} theme="dark" className={`hero ${go ? 'go' : ''}`}>
      <p className="sign">Team Cloud</p>
      <h1>CampusHub</h1>
      <p className="lead hero-lead">
        A Flutter and Firebase app for University of Auckland students that brings events, the class timetable
        and navigation together, and takes you all the way to the room.
      </p>

      <svg className="route" viewBox="0 0 1200 240" role="img" aria-label={TAGLINE.join(' ')}>
        <path className="route-base" d={d} />
        <path className="route-line" d={d} pathLength="1" />
        {WAYPOINTS.map((pi, i) => {
          const [x, y] = POINTS[pi];
          const text = TAGLINE[i];
          const w = text.length * 15 + 44;
          const above = i % 2 === 0;
          const py = above ? y - 66 : y + 24;
          return (
            <g key={text} className="wp" style={{ '--d': `${DELAYS[i]}s` }}>
              <circle cx={x} cy={y} r="9" className="wp-dot" />
              <rect x={x - w / 2} y={py} width={w} height="42" rx="11" className="wp-sign" />
              <rect x={x - w / 2 + 4} y={py + 4} width={w - 8} height="34" rx="8" className="wp-ring" />
              <text x={x} y={py + 28} textAnchor="middle" className="wp-text">
                {text}
              </text>
            </g>
          );
        })}
        <g className="dest" style={{ '--d': '3.1s' }}>
          <circle cx={end[0]} cy={end[1]} r="12" className="ring r1" />
          <circle cx={end[0]} cy={end[1]} r="12" className="ring r2" />
          <circle cx={end[0]} cy={end[1]} r="12" className="ring r3" />
          <circle cx={end[0]} cy={end[1]} r="9" className="dest-dot" />
          <rect x={end[0] - 120} y={end[1] - 78} width="160" height="42" rx="11" className="dest-sign" />
          <text x={end[0] - 40} y={end[1] - 50} textAnchor="middle" className="dest-text">
            Room 302
          </text>
        </g>
      </svg>

      <p className="hint">Press the down arrow or Space to begin. N shows speaker notes, T starts the timer.</p>
    </Section>
  );
}
