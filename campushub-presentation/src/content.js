// All the words in the presentation live here. Edit this file, not the components.
// Source: CampusHub_Presentation_Brief.md. Times are in seconds and add up to 12:00.

export const REPO = 'UOA-CS734-S2-2026/project-implementation-project-cloud';
export const REPO_URL = `https://github.com/${REPO}`;
export const API_URL = 'https://campushub-api-9mfd.onrender.com';
export const TOTAL_SECONDS = 12 * 60;

export const SECTIONS = [
  {
    id: 'hero',
    rail: 'Title',
    seconds: 10,
    speakers: ['Maahir'],
    notes: [
      'Say the team name and course. Say the tagline slowly: See it. Ask about it. Register. Get there.',
      'Keep this under ten seconds. The route on screen is the whole product in one line.',
    ],
  },
  {
    id: 'team',
    rail: 'Team',
    seconds: 20,
    speakers: ['Maahir', 'Partho', 'Yash'],
    notes: [
      'Each person says their own name and role in one sentence. Everyone speaks here.',
      'Three members at submission. If you mention that the team started with four, keep it brief and neutral, or leave it for the re-scope slide.',
    ],
  },
  {
    id: 'problem',
    rail: 'Problem',
    seconds: 45,
    speakers: ['Maahir'],
    notes: [
      'Read the hook as a question to the room. Pause.',
      'Two users with different contexts: the student is on foot in a hurry, the club lead is at a desk typing.',
      'The gap: QUAD and Engage get you to discovery. Nothing connects events, timetable and navigation.',
    ],
  },
  {
    id: 'built',
    rail: 'What we built',
    seconds: 45,
    speakers: ['Maahir', 'Yash'],
    notes: [
      'Three pillars: events, timetable, navigation. Everything shown is implemented and integrated.',
      'Yash takes the timetable pillar: personal iCal link, no university passwords, classes and registered events combined, live.',
      'Drop real screenshots into public/screens (feed.png, timetable.png, navigate.png) to replace the schematic phones.',
    ],
  },
  {
    id: 'design',
    rail: 'Design',
    seconds: 90,
    speakers: ['Maahir'],
    notes: [
      'Walk the timeline with the scroll. Each step is a decision with a reason.',
      'Linger on step three. Lectures 09 and 12 changed the architecture: all writes moved behind an authenticated API. This is the biggest decision of the project.',
      'On the decisions table, pick two or three rows, not all seven. Timetable import and proximity-not-trilateration are the strongest.',
      'Re-scope: say it was deliberate. The assignment brief itself says to re-scope rather than ask for an extension.',
    ],
  },
  {
    id: 'architecture',
    rail: 'Architecture',
    seconds: 90,
    speakers: ['Partho'],
    notes: [
      'Six scroll steps. Reads go direct to Firestore. Writes go through the API with the user\u2019s ID token.',
      'Identity always comes from the verified token, never the request body.',
      'Security in two lines: two locks on every write (API authorization, Firestore rules), and we tested it like an attacker.',
      'Deployment: Auth and Firestore are Google-hosted; the API runs on Render.',
      'Last step is the justification: REST not GraphQL, modular monolith not microservices, and the known counter bottleneck.',
    ],
  },
  {
    id: 'beacon',
    rail: 'Beacon',
    seconds: 45,
    speakers: ['Maahir'],
    notes: [
      'This is the headline mobile capability and the product promise: found the event, couldn\u2019t find the room.',
      'Use the airport-gate analogy: proximity, not position. We only need which room beacon is nearest and roughly how close.',
      'Drag the slider live: far, near, arrived. Switch the Minor to show a different room.',
      'Be honest: thresholds are initial values, not tuned. Android only.',
    ],
  },
  {
    id: 'demo',
    rail: 'Demo',
    seconds: 150,
    speakers: ['Maahir', 'Partho'],
    link: { label: 'Wake the API: open /health', href: `${API_URL}/health` },
    notes: [
      'Before you start: open the health link a minute early so the free-tier Render server is awake.',
      'Mirror the phone to the laptop so it is visible and recorded. One laptop only; do not swap devices mid-session.',
      'Keep the demo under three minutes. Scroll to advance the step on screen as you move through it.',
      'Backups: a recorded video (you must speak live over it) and screenshots of the test runs and the Rules Playground.',
      'Use the Skip to indoor shortcut so nobody has to walk to campus.',
    ],
  },
  {
    id: 'testing',
    rail: 'Testing',
    seconds: 90,
    speakers: ['Yash'],
    notes: [
      'Numbers were verified at commit e5b33fd. If main changed after that, re-run the checks before quoting 104 and 61.',
      'Frontend, backend, whole system, in that order. One concrete story: a test caught the feed showing No events yet for a real database error.',
      'Finish on the honest limits. Saying them first is stronger than being asked.',
    ],
  },
  {
    id: 'management',
    rail: 'Management',
    seconds: 90,
    speakers: ['Maahir'],
    notes: [
      'Describe it honestly: lightweight, Scrum-style, not formal Scrum. Sprints were planned backlog groupings, left unassigned so people self-selected.',
      'Workflow: protected main, one required reviewer, review rotation, CI on every pull request.',
      'Obstacles are the adapting-to-circumstances story: CI blocked by organisation limits, generated files caught in review, a lockfile conflict, and a smaller team.',
      'There is a gap in the meeting minutes between 18 Aug and 16 Sep. If asked, say so. Do not invent entries.',
    ],
  },
  {
    id: 'lessons',
    rail: 'Lessons',
    seconds: 45,
    speakers: ['Maahir', 'Partho', 'Yash'],
    notes: [
      'One lesson each, then the limits together. Everyone speaks.',
      'Say what we did not build before anyone asks.',
    ],
  },
  {
    id: 'qa',
    rail: 'Q&A',
    seconds: 0,
    speakers: ['Maahir', 'Partho', 'Yash'],
    notes: [
      'Click a question to open the answer. Pull up the repo or the wiki if asked where something lives.',
      'Where is feature X: lib/features/navigation, lib/features/timetable, lib/services, api/src/routes, api/src/authMiddleware.ts, firestore.rules, tests in test/ and api/src/*.test.ts.',
    ],
  },
];

export const TEAM = [
  {
    name: 'Maahir',
    role: 'Scrum master and front-end lead',
    speaks: 'Idea, design, beacon demo, project management',
    does: [
      'Project management and workflow',
      'Flutter scaffold, routing, navigation shell and CI workflows',
      'All UI design',
      'Bluetooth beacon and GPS navigation',
    ],
  },
  {
    name: 'Partho',
    role: 'Backend and cloud',
    speaks: 'Architecture, security, deployment',
    does: [
      'Firebase project, Firestore schema and Auth login',
      'API authorization checks and moving writes onto the API',
      'Hosting the API on Render',
      'Chrome testing of student and club-lead features',
    ],
  },
  {
    name: 'Yash',
    role: 'Timetable, testing and integration',
    speaks: 'Timetable, testing',
    does: [
      'UoA timetable import, parsing and validation',
      'Combined timetable and live RSVP updates',
      'Most automated tests, plus Android and Chrome testing',
      'Merge-conflict resolution and integration',
    ],
  },
];

export const PROBLEM = {
  headline: 'Great event. Wrong room. Missed it.',
  hook: 'Who\u2019s seen a club post an event you actually wanted to go to, and then either forgot it because it got buried in your feed, or showed up and couldn\u2019t find the room?',
  personas: [
    {
      who: 'Student',
      context: 'On foot, on a phone, in a hurry',
      wants: [
        'Find an event worth going to',
        'See whether it clashes with classes',
        'Register in a tap',
        'Get to the room',
      ],
    },
    {
      who: 'Club lead',
      context: 'At a desk, mostly typing',
      wants: ['Publish and cancel events', 'See registration counts'],
    },
  ],
  steps: ['Discover events', 'Check clashes', 'Register', 'Walk to the room'],
  others: { name: 'QUAD and Engage', reach: 1, note: 'Get you to discovery' },
  ours: { name: 'CampusHub', reach: 4, note: 'Takes you all the way to the room' },
};

export const TAGLINE = ['See it.', 'Ask about it.', 'Register.', 'Get there.'];

export const PILLARS = [
  {
    name: 'Events',
    points: [
      'Live feed with loading, empty and error states',
      'Event detail with live comments and replies',
      'Registration through an authenticated API',
      'Club-lead dashboard: create, cancel, registration counts',
    ],
  },
  {
    name: 'Timetable',
    points: [
      'Import from your personal UoA iCal link',
      'Classes and registered events in one view',
      'Auckland time, updating live',
    ],
  },
  {
    name: 'Navigation',
    points: [
      'Google Map with live GPS outdoors',
      'Bluetooth iBeacon proximity indoors',
      'A prompt hands you over at the building',
    ],
  },
];

export const BUILT_FOOTNOTE = 'Also: email and password sign-in, and a Profile with live counts and a QR.';

export const PHASES = [
  {
    when: 'August',
    title: 'Pitch and planning',
    kind: 'list',
    items: [
      'Kickoff on 4 Aug, proposal discussed on 6 Aug',
      'Lecturer feedback sharpened the problem statement, the comparison with existing tools and the technology discussion',
      'Pitch refined and submitted 7 to 8 Aug, delivered in five minutes',
      'It gave us the three pillars, the tagline and the airport-gate analogy for beacons',
    ],
  },
  {
    when: 'Mid to late September',
    title: 'Foundations',
    kind: 'list',
    items: [
      'Hand-built Flutter scaffold: feature-first folders, go_router, a four-tab shell (Feed, Timetable, Navigate, Profile)',
      'Placeholder screens, models and Firestore reads',
      'Sprint 1 to 4 backlog, a GitHub Projects board, a contribution guide, a PR template and a review rotation',
    ],
  },
  {
    when: 'Lecture review',
    title: 'The architecture changed',
    kind: 'shift',
    lead: 'A rule enforced only on the client is a suggestion. (Lectures 09 and 12)',
    before: { label: 'Before', flow: ['App', 'Firestore'], verdict: 'Any modified client can ignore the rules' },
    after: { label: 'After', flow: ['App', 'API', 'Firestore'], verdict: 'One place checks who is calling' },
    foot: 'Reads stay on direct Firestore listeners, so the screens still update live.',
  },
  {
    when: 'Feature decisions',
    title: 'What we chose, and what we turned down',
    kind: 'decisions',
  },
  {
    when: 'Late September to early October',
    title: 'UI, then integration',
    kind: 'two',
    columns: [
      {
        head: 'UI',
        items: [
          'First version: default Material widgets and plain lists',
          'Redesign after Lecture 06: Material 3 theming, empty, error and offline states as real design, accessibility, permissions asked in context',
          'A branded, reactive mascot on the login screen',
        ],
      },
      {
        head: 'Integration',
        items: [
          'Live registrations joined to the timetable',
          'Registration and event management through the API',
          'Persistent comments',
          'Profile with live data and role-based access',
          'Android Maps fixes, then final verification',
        ],
      },
    ],
  },
  {
    when: 'Re-scope',
    title: 'Four became three',
    kind: 'list',
    items: [
      'Open work was reassigned',
      'We cut scope on purpose: iOS, web timetable import, and saving imported classes',
      'The assignment brief says to re-scope rather than ask for an extension',
    ],
  },
];

export const DECISIONS = [
  {
    chose: 'Import from the student\u2019s own iCal link',
    over: 'Automating the university sign-in page',
    why: 'No university passwords to handle, and nothing breaks when the page changes',
  },
  {
    chose: 'Proximity detection',
    over: 'Trilateration',
    why: 'We only need which room and roughly how close',
  },
  {
    chose: 'Club dashboard in the same Flutter codebase',
    over: 'A separate React app',
    why: 'A small team can maintain one UI codebase',
  },
  {
    chose: 'Soft-cancel events',
    over: 'Deleting them',
    why: 'Keeps registration history',
  },
  {
    chose: 'Store UTC, show Auckland time',
    over: 'Local time storage',
    why: 'Correct across NZST and NZDT',
  },
  {
    chose: 'Android as the supported platform',
    over: 'iOS and web parity',
    why: 'iOS hides iBeacon data; the university server blocks web import',
  },
  {
    chose: 'A prompt to switch indoors',
    over: 'A fully automatic switch',
    why: 'Simpler and more reliable without an entrance beacon',
  },
];

export const ARCH_STEPS = [
  {
    title: 'Everyone signs in with Firebase Auth',
    body: [
      'Students on Android and club leads on Chrome use one Flutter codebase and the same email and password sign-in.',
    ],
  },
  {
    title: 'Reads go direct',
    body: [
      'The feed, comments and registrations come straight from Firestore listeners, so every screen updates live.',
    ],
  },
  {
    title: 'Writes go through the API',
    body: [
      'Creating or cancelling an event, registering and commenting all call the Express API with the user\u2019s ID token.',
      'The API verifies the token, checks permission, validates the input, then writes with the Admin SDK.',
      'Identity comes from the token, never the request body. A forged userId, postedBy or rsvpCount is ignored.',
    ],
  },
  {
    title: 'Two things never leave the phone',
    body: [
      'Timetable import: the phone downloads the student\u2019s own .ics feed over HTTPS. No university password is collected and the link never reaches our servers.',
      'Beacon navigation: Bluetooth advertisements are read on the device. No backend, no deployment.',
    ],
  },
  {
    title: 'Two locks on every write',
    body: [
      'Lock 1: the API asks who is calling and whether they may act on this object.',
      'Lock 2: Firestore rules let clients read but never write. Anything unlisted is denied.',
      'Tested like an attacker: no token is 401, a student creating an event is 403, forged identity is ignored, a duplicate registration is 409, and a direct client write is denied in the Rules Playground.',
    ],
  },
  {
    title: 'Why this shape',
    why: [
      {
        head: 'REST, not GraphQL',
        text: 'A small, stable set of resources and two clients that need the same shapes. GraphQL pays off when many screens need different slices.',
      },
      {
        head: 'A modular monolith, not microservices',
        text: 'One small team, one release, no measured scaling pressure. Routes are split by feature so a service could be extracted later.',
      },
      {
        head: 'Scales where it matters',
        text: 'The API is stateless and Firestore is managed. The known bottleneck is the per-event registration counter; a sharded counter is the fix. Beacons add no server load.',
      },
    ],
  },
];

export const ARCH_CHIPS = ['Flutter and Dart', 'Firebase Auth', 'Cloud Firestore', 'Express and TypeScript', 'Render'];

export const BEACON = {
  headline: 'Finding the room with Bluetooth',
  lead: 'Proximity, not trilateration. We only need to know which room beacon is nearest, and roughly how close.',
  stages: [
    { label: 'Outdoors', text: 'Google Map, live GPS, distance to go' },
    { label: 'Within 120 m', text: 'Offer to switch to indoor guidance' },
  ],
  pipeline: [
    'Scan Bluetooth LE and keep Apple manufacturer data',
    'Parse the iBeacon packet: UUID, Major, Minor, TX power',
    'Keep only the CampusHub UUID',
    'Smooth the signal: average of the last 5 readings',
    'Pick the strongest beacon and classify it',
    'Look up Major and Minor: building and room',
  ],
  major: 1122,
  rooms: [
    { minor: 3344, name: 'Engineering Building, Room 302' },
    { minor: 3345, name: 'Engineering Building, Room 405' },
    { minor: 3346, name: 'Engineering Building, Level 3 Lobby' },
  ],
  // RSSI thresholds in dBm, taken from the project record.
  arrived: -65,
  near: -80,
  min: -95,
  max: -50,
  honest: 'Thresholds are initial values, not tuned across phones and rooms. Android only.',
  permissionNote:
    'BLUETOOTH_SCAN is requested without neverForLocation, because with it Android 12 and later hides iBeacon packets.',
};

export const DEMO = {
  headline: 'Demo: from the feed to Room 302',
  lead: 'Live on a real Android phone, mirrored to the laptop.',
  steps: [
    {
      title: 'Sign in and join the conversation',
      text: 'Student signs in on the phone, scrolls the feed, opens an event and posts a comment.',
      devices: ['Phone'],
    },
    {
      title: 'Register, then check the timetable',
      text: 'Imported classes and the registered event appear together.',
      devices: ['Phone'],
    },
    {
      title: 'A club lead publishes an event',
      text: 'Created on Chrome, it appears on the phone live.',
      devices: ['Chrome', 'Phone'],
    },
    {
      title: 'Navigate to the room',
      text: 'Map and GPS, then indoors. A second phone acts as the beacon: arrive at Room 302, change the Minor, and a different room appears.',
      devices: ['Phone', 'Beacon phone'],
    },
  ],
  devices: ['Phone', 'Chrome', 'Beacon phone'],
};

export const TESTS = {
  flutter: 104,
  api: 61,
  commit: 'e5b33fd',
  columns: [
    {
      head: 'Frontend',
      sub: 'Flutter',
      items: [
        'Unit: stable class IDs, the iCal parser, NZST and NZDT conversion, the timetable builder, the iBeacon parser against a real captured packet',
        'Widget: feed in every state, timetable screens, live updates and sign-out',
        'Services with mocktail and fake_cloud_firestore, using dependency injection so no real Firebase is needed',
      ],
    },
    {
      head: 'Backend',
      sub: 'Vitest and Supertest, Firebase mocked',
      items: [
        'Authentication failures',
        'Verified token identity overrides what the client sends',
        'Registrations, duplicates, missing events, and a safe error when a transaction fails',
      ],
    },
    {
      head: 'Whole system',
      sub: 'By hand',
      items: [
        'Android emulators and a physical phone, from login to maps and beacons',
        'Live comments across two devices',
        'Chrome: club lead creates and cancels; a student is blocked with 403',
      ],
    },
  ],
  pyramid: ['By hand on devices', 'Widget and service tests', 'Unit tests and API tests'],
  bug: 'A test caught a real bug: the feed said No events yet when the database actually failed. It now shows a distinct error.',
  console: [
    { k: 'create', v: '/events/x as a signed-in client' },
    { k: 'result', v: 'Simulated write denied' },
  ],
  limits: [
    'Most automated tests arrived in the last two weeks',
    'Beacon screens are tested by hand, not by widget tests',
    'Thresholds are untuned',
    'No load testing',
    'iOS is untested',
  ],
};

export const MANAGEMENT = {
  headline: 'How three people shipped one product',
  tabs: ['Plan', 'Workflow', 'Obstacles'],
  sprints: [
    { name: 'Sprint 1', items: ['Scaffold and navigation shell', 'Firebase project and schema', 'Student login', 'Timetable data model'] },
    { name: 'Sprint 2', items: ['Events feed', 'Event detail', 'Timetable import and sync'] },
    { name: 'Sprint 3', items: ['RSVP flow', 'Club-lead dashboard', 'Bluetooth scanning', 'Firestore rules', 'Flutter and API tests'] },
    { name: 'Sprint 4', items: ['Combined timetable', 'Beacon navigation UI', 'Deployment', 'Accessibility pass', 'Final documentation'] },
  ],
  planNotes: [
    'Lightweight and Scrum-style, not formal Scrum',
    'Issues left unassigned so people chose their own tasks',
    'Maahir ran planning and re-planned when the team shrank',
  ],
  board: ['Todo', 'In Progress', 'In Review', 'Done'],
  flow: [
    { head: 'Issue', text: 'Picked up, linked with Closes #N' },
    { head: 'Feature branch', text: 'Conventional commits: feat, fix, test' },
    { head: 'Pull request', text: 'Template with a Definition of Done' },
    { head: 'CI on every PR', text: 'Flutter: analyze, format, test. API: typecheck, test, build' },
    { head: 'One reviewer', text: 'A rotation across the team' },
    { head: 'Protected main', text: 'Nothing lands without all of the above' },
  ],
  prs: [
    ['#10', 'Flutter scaffold'],
    ['#11', 'Timetable import'],
    ['#12', 'Firebase integration'],
    ['#13', 'Student login'],
    ['#14', 'Profile tab and nav shell'],
    ['#16', 'CI, API skeleton, rules'],
    ['#29', 'Combined timetable'],
    ['#30', 'Auth and feed tests'],
    ['#31', 'Events and RSVP API tests'],
    ['#32', 'API authorization, write migration'],
    ['#33', 'Login UI'],
    ['#35', 'Event detail'],
    ['#36', 'Feed'],
    ['#37', 'Timetable UI'],
    ['#38', 'Navigation UI'],
    ['#40', 'Profile UI'],
    ['#41', 'Dashboard UI'],
    ['#42', 'Signed-in timetable routing'],
    ['#43', 'Backend checklist'],
    ['#44', 'Live discussion'],
    ['#45', 'Trusted API, event management'],
    ['#46', 'Navigation config'],
    ['#47', 'Final integration, live Profile'],
  ],
  obstacles: [
    {
      head: 'CI blocked by organisation limits',
      text: 'The Actions minutes cap, then an allowed-actions policy. We documented both, verified locally, and CI worked once staff fixed them.',
    },
    {
      head: 'Generated files in a branch',
      text: 'A browser profile and build output were committed. Review caught it, and .gitignore was extended.',
    },
    {
      head: 'Lockfile conflicts',
      text: 'A Firebase major-version bump. We regenerated the lockfile and never hand-edited it.',
    },
    {
      head: 'The team shrank from four to three',
      text: 'We reassigned open work and cut scope deliberately.',
    },
  ],
  meetings: [
    ['4 Aug', 'Online kickoff'],
    ['6 Aug', 'Proposal and pitch'],
    ['17 to 18 Aug', 'Committed to CampusHub'],
    ['16 to 21 Sep', 'Implementation from the backlog'],
    ['29 Sep', 'Ownership recorded'],
    ['30 Sep to 1 Oct', 'Writes moved to the API'],
    ['3 to 4 Oct', 'Final integration and evidence'],
  ],
};

export const LESSONS = {
  headline: 'What we\u2019d tell ourselves in August',
  learned: {
    head: 'Lessons',
    items: [
      'Check for generated files before every commit',
      'Verify pull requests by running them, not reading the description',
      'Never hand-merge a lockfile. Regenerate it',
      'Start testing with the first features',
      'Re-scope early when the team shrinks',
    ],
  },
  notBuilt: {
    head: 'What we did not build',
    items: [
      'Saving imported classes beyond the open screen',
      'Notification preferences',
      'Verified check-in. The QR is only an account identifier',
      'iOS beacon navigation and iOS testing',
      'Timetable import on web',
    ],
  },
  next: {
    head: 'With more time',
    items: [
      'Persist imported classes',
      'Move the beacon table to Firestore and tune thresholds',
      'A beacon at the entrance for an automatic switch',
      'iOS support and notifications',
      'Web import through a server-side fetch or file upload',
    ],
  },
  beyond: {
    head: 'Learned beyond the course',
    items: [
      'iBeacon packet parsing',
      'Android 12 Bluetooth permissions',
      'iCalendar parsing',
      'Daylight-saving handling',
      'Firebase token verification and transactions',
      'RxDart reactive joins',
      'Test doubles',
    ],
  },
};

export const QA = [
  {
    q: 'Why an API when Firestore can be written directly?',
    a: 'A client-side rule is a suggestion; a modified client can ignore it. The API is the one place that checks who is calling and whether they may act on that object.',
  },
  {
    q: 'Why REST and not GraphQL?',
    a: 'Small, stable resources and two clients with the same shapes. GraphQL helps when many views need different slices.',
  },
  {
    q: 'Why not microservices?',
    a: 'One small team, one release, no scaling pressure. Routes are separated by feature, so a service could be extracted later.',
  },
  {
    q: 'Why not scrape the UoA login for the timetable?',
    a: 'It would mean handling students\u2019 university passwords, and it breaks when the page changes. The iCal subscription link is the sanctioned, revocable route.',
  },
  {
    q: 'Why proximity and not trilateration?',
    a: 'We only need the nearest room. Trilateration needs several calibrated beacons per room.',
  },
  {
    q: 'Does the beacon feature need the cloud?',
    a: 'No. It runs entirely on the device.',
  },
  {
    q: 'How does it scale?',
    a: 'A stateless API behind a load balancer, with managed Firestore. The per-event counter is the known bottleneck; a sharded counter is the fix.',
  },
  {
    q: 'What would you do with more time?',
    a: 'Persist imported classes, move the beacon table to Firestore, tune thresholds, add event coordinates, iOS support, notifications, and a web import through a server-side fetch or file upload.',
  },
  {
    q: 'What went wrong?',
    a: 'Committed build files, late testing, pull-request descriptions that drifted from the diffs, CI blocked by organisation limits, and losing a team member.',
  },
  {
    q: 'Where is feature X in the code?',
    a: 'lib/features/navigation and lib/features/timetable; lib/services; api/src/routes and api/src/authMiddleware.ts; firestore.rules; tests in test/ and api/src/*.test.ts.',
  },
];
