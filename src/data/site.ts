export const siteConfig = {
  name: 'Simay Uygur',
  shortName: 'Simay',
  title: 'Simay Uygur | Portfolio',
  description: 'Portfolio, selected work, writing, and experiments by Simay Uygur.',
  email: 'simayuygur09@gmail.com',
  github: 'https://github.com/simay-uygur',
  linkedin: 'https://www.linkedin.com/in/simay-uygur/',
  location: 'Istanbul, Turkiye',
  role: 'Developer, student, and builder of web projects',
  homeLabel: 'Selected Work',
  journalLabel: 'Writing',
  aboutIntro:
    'I build digital projects, document what I learn, and use this site to collect the work I want to stand behind.',
  aboutParagraphs: [
    'This template started as an editorial layout. It now serves as a portfolio home for projects, experiments, and writing that reflect how I think and build.',
    'Use this page to explain what you study, what kinds of roles you want, what tools you use, and what kinds of problems you enjoy solving.',
  ],
  strengths: [
    'Web development and interface implementation',
    'Course projects, prototypes, and technical experiments',
    'Writing clear case studies about process and outcomes',
  ],
  navItems: [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Writing', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
