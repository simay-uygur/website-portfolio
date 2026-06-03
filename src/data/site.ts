export const siteConfig = {
  name: 'Simay Uygur',
  shortName: 'Simay',
  homeBrand: 'Simay',
  title: 'Simay Uygur | Portfolio',
  description: 'Portfolio, selected work, writing, and experiments by Simay Uygur.',
  email: 'simayuygur09@gmail.com',
  github: 'https://github.com/simay-uygur',
  linkedin: 'https://www.linkedin.com/in/simay-uygur/',
  cvLabel: 'CV',
  cvHref: '/files/simaycv.pdf',
  location: 'Ankara, Turkey (Turkiye)',
  role: 'Backend-focused developer exploring machine learning and selective frontend work',
  homeLabel: 'Selected Work',
  journalLabel: 'Writing',
  aboutIntro:
    'I am Simay Uygur, a backend-focused developer and student who also explores machine learning and builds selected frontend interfaces when the project needs them.',
  aboutParagraphs: [
    'This website brings together my portfolio projects, coursework, backend-heavy engineering work, machine learning assignments, and technical writing in one place.',
    'Most of my work is centered on backend systems, databases, operating systems, and implementation details, but I also like trying new areas such as machine learning and building frontend layers when they help complete a product.',
    'I use this site to show not only finished results but also the process behind them: implementation choices, debugging work, tradeoffs, and what I learned from each project.',
  ],
  strengths: [
    'Backend development, systems work, and implementation-focused engineering',
    'Machine learning coursework and technical experimentation in Python',
    'Frontend work when needed to support the full product experience',
    'Writing clear case studies about process, tradeoffs, and outcomes',
  ],
  experience: [
    {
      organization: 'ASELSAN',
      role: 'Software & Systems Test Intern',
      team: 'Radar and Electronic Warfare Systems (REHIS)',
      period: 'June 2025 - July 2025',
      location: 'Ankara, Turkey',
      details: [
        'Worked with C#, .NET, TCP/IP socket programming, client-server systems, and serialization.',
        'Built a modular TCP communication simulator and supporting serialization infrastructure for internal automated testing and debugging workflows.',
      ],
    },
    {
      organization: 'Akdogan Technology',
      role: 'Software Development Intern',
      period: 'August 2025',
      location: 'Ankara, Turkey',
      details: [
        'Worked with TypeScript, Python, FastAPI, React, PostgreSQL, Docker, and SQLAlchemy.',
        'Contributed to a Dockerized FastAPI and React system by migrating frontend components to TypeScript, improving UI components, and supporting backend development.',
      ],
    },
    {
      organization: 'Bilkent University',
      role: 'CS 101 Tutor',
      period: 'February 2024 - May 2024',
      location: 'Ankara, Turkey',
      details: [
        'Supported first-year students in Java programming, debugging, and algorithmic problem-solving.',
        'Helped reinforce core software engineering concepts through direct tutoring and technical guidance.',
      ],
    },
    {
      organization: 'School Support Association (ODD)',
      role: 'Volunteer Science Teacher',
      period: 'January 2024 - June 2024',
      location: 'Remote',
      details: [
        'Delivered online science lessons to 6th-grade students using adaptive, inquiry-based teaching methods.',
        'Received a Certificate of Appreciation for community contribution.',
      ],
    },
  ],
  navItems: [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Writing', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'CV', href: '/files/simaycv.pdf', external: true },
  ],
} as const;
