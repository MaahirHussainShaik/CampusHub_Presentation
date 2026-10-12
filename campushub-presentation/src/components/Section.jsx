import { useRef } from 'react';
import { STEP_VH, usePinned } from '../hooks.js';

export function Speakers({ names }) {
  return (
    <div className="speakers" aria-label="Speaking in this section">
      {names.map((n) => (
        <span className="chip" key={n}>
          {n}
        </span>
      ))}
    </div>
  );
}

// A normal one-screen section.
export function Section({ meta, theme, className = '', children }) {
  return (
    <section
      id={meta.id}
      data-stop
      data-steps="1"
      aria-label={meta.rail}
      className={`stop ${theme} ${className}`}
    >
      <Speakers names={meta.speakers} />
      <div className="stop-inner">{children}</div>
    </section>
  );
}

// A tall section whose content stays pinned while the scroll moves through `steps` steps.
// `children` is a function of the current step.
export function PinnedSection({ meta, theme, steps, className = '', children }) {
  const ref = useRef(null);
  const step = usePinned(ref, steps);

  return (
    <section
      ref={ref}
      id={meta.id}
      data-stop
      data-steps={steps}
      aria-label={meta.rail}
      className={`stop pinned ${theme} ${className}`}
      style={{ height: `${100 + steps * STEP_VH}vh` }}
    >
      <div className="pin">
        <Speakers names={meta.speakers} />
        <div className="ticks" aria-hidden="true">
          {Array.from({ length: steps }, (_, i) => (
            <span key={i} className={i === step ? 'on' : i < step ? 'done' : ''} />
          ))}
        </div>
        <div className="stop-inner">{children(step)}</div>
      </div>
    </section>
  );
}
