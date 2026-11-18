// All English copy lives here. Edit text without touching components.
// Keep id.ts in the same shape (TypeScript will complain if keys go missing).

export const en = {
  meta: {
    title: 'Wisnhu Surya Wardhana: Mobile Engineer → Product Manager',
    description:
      'Senior mobile engineer with 6+ years building SejutaCita (Google Play Best App 2021), Dealls Jobs and Kantorku HRIS. Now moving into product management.',
  },
  nav: {
    about: 'About',
    work: 'Work',
    experience: 'Experience',
    contact: 'Contact',
    themeLabel: 'Dark mode',
    langLabel: 'Baca dalam Bahasa Indonesia',
  },
  hero: {
    badge: 'Open to Product Manager roles',
    name: 'Wisnhu Surya Wardhana',
    headlineA: 'I’ve spent six years',
    headlineB: 'building products.',
    headlineC: 'Now I want to shape them.',
    intro:
      'Senior mobile engineer at SejutaCita. I helped build three apps from scratch, including one Google Play named Best App of 2021. I work closest to the people deciding what gets built, and that’s the job I’m moving into.',
    ctaPrimary: 'See my work',
    ctaSecondary: 'Download CV',
  },
  highlights: [
    { value: '1M+', label: 'downloads on SejutaCita' },
    { value: 'Best App 2021', label: 'Google Play recognition' },
    { value: '2h → 30m', label: 'release time after pipeline rework' },
    { value: '3', label: 'apps launched from scratch' },
  ],
  about: {
    label: 'About',
    title: 'Why product, and why me',
    paragraphs: [
      'Most of my career has been spent on the build side: Flutter, Android, architecture, release pipelines. Along the way, the parts of the job I cared about most moved upstream. Why are users dropping off here? Is this feature worth two sprints? What can we cut and still ship something valuable?',
      'At SejutaCita I worked daily with product managers and QA to get features out on schedule. I reviewed my team’s work, owned App Store and Play Store releases, and turned a two-hour manual release into a sub-30-minute automated one. That work is mostly about trade-offs, priorities and keeping a team moving, which is product work.',
    ],
    bringTitle: 'What I bring from engineering',
    bring: [
      ['Realistic scoping', 'I can tell what is cheap, what is expensive, and what only looks simple.'],
      ['Credibility with engineers', 'I can discuss trade-offs in their language and respect their constraints.'],
      ['Shipping discipline', 'Releases, versioning, crash reports and store reviews are familiar ground.'],
      ['Bilingual collaboration', 'I work fluently in Indonesian and English with local and distributed teams.'],
    ],
  },
  work: {
    label: 'Selected work',
    title: 'Products I helped build',
    headings: { context: 'Context', role: 'My role', decisions: 'Key decisions', outcome: 'Outcome' },
    visit: 'Google Play editorial',
    items: [
      {
        name: 'SejutaCita',
        kind: 'Social platform · Consumer mobile',
        org: 'SejutaCita · 2021 – present',
        context:
          'A social and career platform for young Indonesians that had to grow fast without the app slowing down with each release.',
        role: 'Senior mobile developer on the founding mobile team, from first commit to public launch.',
        // TODO: add one concrete product decision you influenced (e.g. a feature you pushed back on or reprioritised).
        decisions: [
          'Chose a modular Clean Architecture early, so new features could ship independently without a rewrite.',
          'Worked with PMs and QA on release scope so each version shipped on schedule with fewer bugs.',
        ],
        outcome: 'Reached 1M+ downloads and was named Best App of 2021 by Google Play.',
        link: 'https://play.google.com/store/apps/editorial?id=mc_bestof2021_apps_fcp',
      },
      {
        name: 'Kantorku by Dealls',
        kind: 'HRIS · B2B SaaS',
        org: 'Dealls by SejutaCita',
        context:
          'Companies needed attendance, payroll and recruitment in one place instead of spreadsheets plus separate tools.',
        role: 'Built the mobile app from scratch and integrated the core HR modules.',
        // TODO: add who the users were (HR admins vs employees) and any adoption metric you can share.
        decisions: [
          'Kept attendance, payroll and recruitment as separate modules so B2B clients could get features without disruptive releases.',
          'Set up CI/CD from day one, so enterprise customers received fixes quickly and predictably.',
        ],
        outcome: 'One integrated HR platform covering attendance, payroll and recruitment on mobile.',
      },
      {
        name: 'Dealls Jobs',
        kind: 'Job marketplace · Mobile',
        org: 'Dealls by SejutaCita',
        context: 'A job marketplace connecting candidates and employers, serving users in more than one language.',
        role: 'Built the app from scratch with the mobile team.',
        // TODO: add a candidate/employer pain point you helped solve.
        decisions: [
          'Built localization into the architecture from the start, so a new language is a content task rather than an engineering project.',
          'Reused shared modules across the group’s apps to cut duplicated effort.',
        ],
        outcome: 'Shipped a multi-language job platform on a scalable codebase shared with sister products.',
      },
      {
        name: 'Release pipeline',
        kind: 'Internal product · Developer experience',
        org: 'SejutaCita',
        context:
          'Each release took about two hours of manual build-and-upload work. Teams shipped less often and fixes reached users slowly.',
        role: 'Identified the bottleneck, proposed the fix and owned the rollout.',
        decisions: [
          'Treated the pipeline as an internal product, with engineers and QA as users who needed a faster, more trustworthy path to production.',
          'Automated test, analyze, build and distribution to Firebase App Distribution and TestFlight with GitHub Actions.',
        ],
        outcome: 'Release time dropped from about 2 hours to under 30 minutes, and QA got builds the same day.',
      },
    ],
  },
  experience: {
    label: 'Experience',
    title: 'Where I’ve worked',
    present: 'Present',
    jobs: [
      {
        role: 'Senior Mobile Developer',
        company: 'SejutaCita',
        place: 'South Jakarta',
        period: 'Apr 2021 – Present',
        points: [
          'Built and launched SejutaCita, Dealls Jobs and Kantorku by Dealls from scratch.',
          'Worked with product managers and QA to deliver features on schedule with fewer bugs.',
          'Led code reviews and improved team delivery speed and code quality.',
          'Cut release time from ~2 hours to under 30 minutes with automated CI/CD.',
        ],
      },
      {
        role: 'Mobile Developer',
        company: 'SanberCode',
        place: 'Bandung',
        period: 'Sep 2020 – Aug 2021',
        points: [
          'Developed and maintained Flutter and Kotlin apps in Agile/Scrum teams.',
          'Tracked post-release bug reports and reduced the crash rate by refactoring legacy code and tightening QA.',
        ],
      },
    ],
    education: {
      label: 'Education',
      degree: 'B.Sc. Computer Science (Informatics)',
      school: 'Brawijaya University, Malang',
      period: '2014 – 2019',
    },
  },
  skills: {
    label: 'Skills',
    title: 'Toolkit',
    groups: [
      {
        name: 'Product & collaboration',
        items: ['Cross-functional delivery', 'Agile / Scrum', 'Release management', 'Product analytics (Firebase)', 'Code review & mentoring', 'Documentation'],
      },
      {
        name: 'Technical',
        items: ['Flutter & Dart', 'Kotlin & Android', 'Clean Architecture', 'Modularization', 'BLoC', 'Localization', 'Firebase'],
      },
      {
        name: 'Delivery tooling',
        items: ['GitHub Actions', 'Fastlane', 'Codemagic', 'TestFlight', 'Firebase App Distribution', 'Crashlytics'],
      },
      {
        name: 'Languages',
        items: ['Indonesian (native)', 'English (professional)'],
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Let’s talk.',
    body: 'Hiring a product manager who understands both users and engineers? I’d love to hear from you.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Download CV (PDF)',
  },
  footer: {
    built: 'Built with Astro. Based in Tuban, Indonesia.',
  },
};

export type Dict = typeof en;
