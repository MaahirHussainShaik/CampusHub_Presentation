import { useState } from 'react';
import { Section } from './Section.jsx';
import { API_URL, QA as ITEMS, REPO, REPO_URL } from '../content.js';

export default function QA({ meta }) {
  const [open, setOpen] = useState(null);
  return (
    <Section meta={meta} theme="dark" className="qa">
      <div className="qa-grid">
        <div className="qa-left">
          <h2>Questions</h2>
          <p className="lead">The tagline, once more: See it. Ask about it. Register. Get there.</p>
          <ul className="links">
            <li>
              <a href={REPO_URL} target="_blank" rel="noreferrer">
                Repository
              </a>
              <span>{REPO}</span>
            </li>
            <li>
              <a href={`${API_URL}/health`} target="_blank" rel="noreferrer">
                Hosted API health
              </a>
              <span>{API_URL.replace('https://', '')}</span>
            </li>
          </ul>
          <p className="fine">The wiki has the Architecture, Security and Privacy, Testing and Deployment pages.</p>
        </div>
        <ul className="faq">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={isOpen ? 'open' : ''}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                </button>
                <div className="answer" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
