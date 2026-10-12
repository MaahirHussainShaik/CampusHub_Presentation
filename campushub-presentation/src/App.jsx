import { useCallback, useEffect, useRef, useState } from 'react';
import { SECTIONS } from './content.js';
import { STEP_VH, prefersReducedMotion, useOnScroll } from './hooks.js';
import RouteRail from './components/RouteRail.jsx';
import Timer from './components/Timer.jsx';
import NotesPanel from './components/NotesPanel.jsx';
import Hero from './components/Hero.jsx';
import Team from './components/Team.jsx';
import Problem from './components/Problem.jsx';
import Built from './components/Built.jsx';
import Design from './components/Design.jsx';
import Architecture from './components/Architecture.jsx';
import Beacon from './components/Beacon.jsx';
import Demo from './components/Demo.jsx';
import Testing from './components/Testing.jsx';
import Management from './components/Management.jsx';
import Lessons from './components/Lessons.jsx';
import QA from './components/QA.jsx';

const meta = (id) => SECTIONS.find((s) => s.id === id);

// Every scroll position the presenter can land on: one per section, plus one per step
// inside pinned sections.
function computeStops() {
  const stepPx = (window.innerHeight * STEP_VH) / 100;
  const stops = [];
  document.querySelectorAll('[data-stop]').forEach((el) => {
    const top = el.getBoundingClientRect().top + window.scrollY;
    const n = Number(el.dataset.steps || 1);
    for (let i = 0; i < n; i += 1) {
      stops.push(Math.round(top + i * stepPx + (i > 0 ? 2 : 0)));
    }
  });
  return stops;
}

export default function App() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [notesOpen, setNotesOpen] = useState(false);
  const [timer, setTimer] = useState({ shown: false, running: false, elapsed: 0 });
  const pending = useRef(null);

  // Which section is current, and how far along the route are we?
  useOnScroll(() => {
    const vh = window.innerHeight;
    let idx = 0;
    SECTIONS.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top <= vh * 0.4) idx = i;
    });
    setActiveId(SECTIONS[idx].id);

    const el = document.getElementById(SECTIONS[idx].id);
    const range = Math.max(1, el.offsetHeight - vh);
    const frac = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range));
    const progress = Math.min(1, (idx + frac) / (SECTIONS.length - 1));
    document.documentElement.style.setProperty('--route-progress', progress.toFixed(4));
  });

  const scrollToY = useCallback((y) => {
    pending.current = y;
    window.scrollTo({ top: y, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    window.setTimeout(() => {
      pending.current = null;
    }, 800);
  }, []);

  const jump = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (el) scrollToY(Math.round(el.getBoundingClientRect().top + window.scrollY));
    },
    [scrollToY]
  );

  const move = useCallback(
    (dir) => {
      const stops = computeStops();
      const base = pending.current ?? window.scrollY;
      if (dir === 'home') return scrollToY(stops[0]);
      if (dir === 'end') return scrollToY(stops[stops.length - 1]);
      if (dir > 0) {
        const next = stops.find((y) => y > base + 8);
        if (next !== undefined) scrollToY(next);
      } else {
        const prev = [...stops].reverse().find((y) => y < base - 8);
        scrollToY(prev !== undefined ? prev : 0);
      }
      return undefined;
    },
    [scrollToY]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      const onButton = e.target.closest && e.target.closest('button, a, summary');

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case 'j':
          e.preventDefault();
          move(1);
          break;
        case ' ':
          if (onButton) return;
          e.preventDefault();
          move(e.shiftKey ? -1 : 1);
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
        case 'k':
          e.preventDefault();
          move(-1);
          break;
        case 'Home':
          e.preventDefault();
          move('home');
          break;
        case 'End':
          e.preventDefault();
          move('end');
          break;
        case 'n':
        case 'N':
          setNotesOpen((o) => !o);
          break;
        case 't':
        case 'T':
          setTimer((t) =>
            t.shown ? { ...t, running: !t.running } : { ...t, shown: true, running: true }
          );
          break;
        case 'R':
          setTimer({ shown: false, running: false, elapsed: 0 });
          break;
        default:
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [move]);

  useEffect(() => {
    if (!timer.running) return undefined;
    let last = performance.now();
    const id = setInterval(() => {
      const now = performance.now();
      const dt = now - last;
      last = now;
      setTimer((t) => ({ ...t, elapsed: t.elapsed + dt }));
    }, 250);
    return () => clearInterval(id);
  }, [timer.running]);

  return (
    <>
      <RouteRail sections={SECTIONS} activeId={activeId} onJump={jump} />
      <main>
        <Hero meta={meta('hero')} />
        <Team meta={meta('team')} />
        <Problem meta={meta('problem')} />
        <Built meta={meta('built')} />
        <Design meta={meta('design')} />
        <Architecture meta={meta('architecture')} />
        <Beacon meta={meta('beacon')} />
        <Demo meta={meta('demo')} />
        <Testing meta={meta('testing')} />
        <Management meta={meta('management')} />
        <Lessons meta={meta('lessons')} />
        <QA meta={meta('qa')} />
      </main>
      <Timer
        shown={timer.shown}
        running={timer.running}
        elapsed={timer.elapsed}
        onToggle={() => setTimer((t) => ({ ...t, running: !t.running }))}
      />
      <NotesPanel open={notesOpen} section={SECTIONS.find((s) => s.id === activeId)} />
    </>
  );
}
