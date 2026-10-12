# CampusHub presentation (Team Cloud)

A scroll-driven React site for the COMPSCI 734 seminar. Built with Vite and React, plain CSS, no extra libraries.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serve the built version
```

## Deploy to Vercel

1. Push this folder to its own GitHub repo (or inside your team repo).
2. On vercel.com choose **Add New > Project**, import the repo.
3. Vercel detects Vite. Leave the defaults: build `npm run build`, output `dist`. Click **Deploy**.
4. Open the production URL in a private window to confirm it is public. That link is what you can submit as the "public online deck".

Or from the terminal: `npx vercel` then `npx vercel --prod`.

## Presenting

| Key | Action |
|---|---|
| Down, Right, Space, PageDown | Next step (a step inside a pinned section, or the next section) |
| Up, Left, Shift+Space, PageUp | Back one step |
| Home, End | First or last |
| N | Show or hide speaker notes (hide before the audience sees them) |
| T | Show the 12:00 countdown and start it. T again pauses |
| Shift+R | Reset and hide the timer |

Scrolling with the mouse or trackpad works too. The dots on the left jump between sections.
Space does not advance while a button has focus, so use the arrow keys after clicking something.

## Editing

- **All wording, timings and speakers live in `src/content.js`.** Times are seconds and add up to 12:00.
- **Screenshots:** drop `feed.png`, `timetable.png` and `navigate.png` into `public/screens/`. They replace the schematic phones on the "What we built" section. Portrait phone screenshots (about 1:2) fit best.
- **Colours and type:** tokens at the top of `src/styles.css`.

## Structure

```
src/
  App.jsx            keyboard stepping, timer, notes, route rail
  hooks.js           useOnScroll, useInView, useCountUp, usePinned
  content.js         every word on every slide
  components/        one file per section
  styles.css         one plain stylesheet
```
