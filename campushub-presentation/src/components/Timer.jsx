import { TOTAL_SECONDS } from '../content.js';

function format(ms) {
  const sign = ms < 0 ? '+' : '';
  const total = Math.abs(Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = String(total % 60).padStart(2, '0');
  return `${sign}${m}:${s}`;
}

export default function Timer({ shown, running, elapsed, onToggle }) {
  if (!shown) return null;
  const remaining = TOTAL_SECONDS * 1000 - elapsed;
  const state = remaining < 0 ? 'over' : remaining <= 120000 ? 'warn' : '';
  return (
    <button
      type="button"
      className={`timer ${state}`}
      onClick={onToggle}
      aria-label={running ? 'Pause timer' : 'Start timer'}
    >
      <span className="timer-time">{format(remaining)}</span>
      <span className="timer-state">{running ? 'running' : 'paused'}</span>
    </button>
  );
}
