import { PinnedSection } from './Section.jsx';
import { DEMO, VIDEO_URL } from '../content.js';


export default function Demo({ meta }) {
  return (
    <PinnedSection meta={meta} theme="dark" steps={DEMO.steps.length} className="demo">
      {(step) => {
        const s = DEMO.steps[step];
        return (
          <div className="demo-grid">
            <div className="demo-left">
              <h2>{DEMO.headline}</h2>
              <p className="lead">{DEMO.lead}</p>
              <div className="now" key={step}>
                <span className="sign">
                  {step + 1} of {DEMO.steps.length}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <ul className="devices" aria-label="Devices in use">
                {DEMO.devices.map((d) => (
                  <li key={d} className={s.devices.includes(d) ? 'on' : ''}>
                    {d}
                  </li>
                ))}
              </ul>
              <a className="video-btn" href={VIDEO_URL} target="_blank" rel="noreferrer">
              Play the backup video
              </a>
              <p className="video-note">
               Note: in the video, for the Bluetooth beacon part, we couldn't access Room 302. We placed the beacon
                in the Quad instead, changed the destination to the Quad, and navigated there.
              </p>
            </div>
            <ol className="runway">
              {DEMO.steps.map((x, i) => (
                <li key={x.title} className={i === step ? 'on' : i < step ? 'done' : ''}>
                  <span className="node" />
                  <span className="label">{x.title}</span>
                </li>
              ))}
            </ol>
          </div>
        );
      }}
    </PinnedSection>
  );
}
