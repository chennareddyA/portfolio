// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE. Everything on the site comes from here.
//  Replace every value marked TODO with your own details.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Chenna Reddy A', // TODO
  role: 'React Frontend Developer',
  location: 'Hyderabad, India', // TODO: city, India
  available: true, // shows the "Available for new projects" status
  headline: 'I turn your designs into fast, working React apps.',
  intro:
    'Frontend developer building production apps with React, TypeScript and Tailwind for government and enterprise clients. I take your Figma file, screenshot or idea and deliver a responsive, clean-coded site or dashboard, with regular updates and a live preview link while I work.',
  email: 'chennareddya5@gmail.com', // TODO
  links: {
    upwork: 'https://www.upwork.com/freelancers/~01213b475bdefd28f2?mp_source=share', // TODO
    fiverr: 'https://www.fiverr.com/s/DmmYoba', // TODO
    github: 'https://github.com/chennareddyA', // TODO
    linkedin: 'https://www.linkedin.com/in/chenna-reddy-279243304/', // TODO
  },
}

export type Service = {
  title: string
  description: string
  youGet: string[]
  turnaround: string
}

export const services: Service[] = [
  {
    title: 'Figma or design to React',
    description:
      'Pixel-accurate, responsive pages and components from your Figma, XD or image designs.',
    youGet: ['React or Next.js + Tailwind', 'Mobile, tablet and desktop layouts', 'Reusable components'],
    turnaround: 'From 2 days',
  },
  {
    title: 'Admin dashboards',
    description:
      'Data tables with search, filters and pagination, charts, role-based screens and API integration.',
    youGet: ['TanStack Table or custom grids', 'Excel and PDF export', 'Login and role-based access'],
    turnaround: 'From 1 week',
  },
  {
    title: 'Landing pages and business websites',
    description:
      'Fast, SEO-friendly websites for startups and small businesses, deployed and ready to share.',
    youGet: ['Contact forms', 'Good Lighthouse scores', 'Deployed on Vercel or Netlify'],
    turnaround: 'From 3 days',
  },
  {
    title: 'Bug fixes and UI improvements',
    description:
      'Broken layouts, React errors, slow pages or messy components in an existing app, fixed and explained.',
    youGet: ['Root-cause fix, not a patch', 'Short note on what changed', 'Performance clean-up'],
    turnaround: 'Often same day',
  },
  {
    title: 'React Native mobile apps',
    description:
      'Android, iOS and web from one Expo codebase, with offline handling and tested components.',
    youGet: ['Expo + NativeWind', 'Zustand state', 'Jest tests'],
    turnaround: 'Quoted per project',
  },
]

export type CaseStudy = {
  title: string
  kind: string
  summary: string
  built: string[]
  stack: string[]
}

// Professional work. Client names and code stay private, so describe the
// problem and what you built rather than naming the organisation.
export const caseStudies: CaseStudy[] = [
  {
    title: 'Online recruitment application portal',
    kind: 'Government recruitment board, public-facing web app',
    summary:
      'Candidates register, verify, fill a multi-step application, pay the fee online and print their application.',
    built: [
      'Registration and login with OTP verification and Cloudflare Turnstile bot protection',
      'Multi-step application with qualification, eligibility and ex-servicemen sections',
      'Payment gateway flow with response handling and receipts',
      'Printable application form with QR code, plus forgot and reset password flows',
      'Support query module and admin views',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Axios'],
  },
  {
    title: 'Exam evaluation and marks entry system',
    kind: 'Answer-script evaluation for a large examination body',
    summary:
      'Evaluators scan answer-script barcodes with the device camera and enter marks; admins track progress across camps and subjects.',
    built: [
      'Camera-based QR and barcode scanning of scripts and bundles (ZXing)',
      'Keypad-driven marks entry grid with live totals and validation',
      'Role-based routes for evaluators, officers and admins (JWT)',
      'Admin dashboard: camp-wise and subject-wise reports, mismatch detection, marks ranges',
      'Data tables with column filters, Excel and PDF export, unit tests with Vitest',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'TanStack Table', 'SheetJS', 'jsPDF', 'Vitest'],
  },
  {
    title: 'Question paper distribution management system',
    kind: 'Secure document workflow for a university',
    summary:
      'Question papers are uploaded, scheduled and released to colleges only inside a set download window, with every action audited.',
    built: [
      'Single sign-on with Keycloak; page- and feature-level permissions driven by role codes',
      'OTP challenge before sensitive downloads; time-bound download windows',
      'Single and bulk upload with progress, rich-text instructions (Tiptap) sanitised with DOMPurify',
      'Audit and status-change history for every paper',
      'In-house component library: accessible dialogs with focus trap, data grid with pager, toasts, network status',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Keycloak', 'Tiptap', 'ESLint + Prettier'],
  },
  {
    title: 'Personal finance and tracking mobile app',
    kind: 'Cross-platform consumer app (Android, iOS and web)',
    summary:
      'Users add expenses in two taps, see weekly spending insights and track deliveries, even on a patchy connection.',
    built: [
      'Quick-add expense screen with numpad and category grid',
      'Transaction list with filters and swipe-to-delete; insights screen with pull to refresh',
      'Package tracking timeline and in-app barcode scanner',
      'Offline banner, reconnect refresh and request cancellation',
      '170 passing tests across components, hooks and config',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Zustand', 'Jest'],
  },
]

export type Build = {
  title: string
  description: string
  stack: string[]
  live?: string // TODO: add once deployed
  code?: string // TODO: add once on GitHub
}

// Portfolio projects you build yourself. A project with no live or code link
// shows as "In progress"; add the links as you finish each one.
export const builds: Build[] = [
    {
    title: 'Analytics dashboard',
    description:
      'Login with protected routes, KPI cards, sales charts, and product and customer tables with search, filters, sorting, pagination and Excel export.',
    stack: ['React', 'TypeScript', 'TanStack Table', 'Recharts', 'Zustand'],
    live: 'https://chennareddy-dashboard.vercel.app',
    code: 'https://github.com/chennareddyA/analytics-dashboard',
  },
  {
  title: 'Figma to code: SaaS landing page',
  description: 'A Figma Community design rebuilt pixel-accurately, responsive from 360px to 1440px.',
  stack: ['Next.js', 'Tailwind CSS'],
  live: 'https://chennareddy-landing.vercel.app',
  code: 'https://github.com/chennareddyA/saas-landing',
},
    {
    title: 'E-commerce storefront',
    description:
      'Online store with search, filters in the URL, product pages with offers, a saved cart and wishlist, Buy now, and a validated 3-step checkout. Unit tested with Vitest.',
    stack: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vitest'],
    live: 'https://chennareddy-shop.vercel.app',
    code: 'https://github.com/chennareddyA/shopnest',
  },
    {
    title: 'Performance case study',
    description:
      'A slow 10,000-item React list measured and fixed: virtualization, memoization, deferred rendering and lighter libraries. Renders went from 372 ms to under 5 ms, with live metrics on both versions.',
    stack: ['React', 'TypeScript', 'TanStack Virtual', 'React Profiler'],
    live: 'https://chennareddy-perf.vercel.app',
    code: 'https://github.com/chennareddyA/react-performance-case-study',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML', 'CSS'] },
  { group: 'Styling and UI', items: ['Tailwind CSS', 'Radix UI', 'shadcn/ui', 'Responsive design', 'Accessibility'] },
  { group: 'State and data', items: ['Zustand', 'Context API', 'Axios', 'TanStack Table', 'REST APIs'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'NativeWind'] },
  { group: 'Auth and security', items: ['Keycloak', 'JWT', 'Role-based access', 'OTP flows'] },
  { group: 'Database', items: ['SQL Server', 'Stored procedures', 'Reporting queries'] },
  { group: 'Quality and tools', items: ['Vitest', 'Jest', 'Testing Library', 'ESLint', 'Prettier', 'Git', 'Vite', 'Vercel'] },
]

export const process: { title: string; text: string }[] = [
  { title: 'You share the design or brief', text: 'A Figma link, screenshots, or a short description of what you need.' },
  { title: 'I send a fixed quote and timeline', text: 'Clear scope, milestones and delivery date before any work starts.' },
  { title: 'You watch it come together', text: 'Regular updates and a live preview link you can open on any device.' },
  { title: 'Handover', text: 'Clean, commented code in your repository, deployed if you want, with a walkthrough.' },
]
