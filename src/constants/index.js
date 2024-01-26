import { meta, shopify, starbucks, tesla } from '../assets/images'
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  python,
  django,
  framer,
  mysql,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  wizard,
} from '../assets/icons'

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: sass,
    name: 'Saas',
    type: 'Frontend',
  },
  {
    imageUrl: framer,
    name: 'Framer Motion',
    type: 'Animation',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: python,
    name: 'Pyhton',
    type: 'Backend',
  },

  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
]

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

export const projects = [
  {
    icon: threads,
    iconBg: '#a77eff',
    title: 'Threads Clone',
    date: 'Sep 2023 - Oct 2023',
    description:
      'A full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    features: [
      'Create and share threads with other users',
      'Signup and authenticate users using clerk',
      'Fully responsivee across all platforms',
      'Personalized and customizable user profile',
      'Create and Join communities',
    ],
    'project-url': 'https://github.com/IsbatBInHossain/threads-clone',
    'live-link': 'https://threads-clone-rho.vercel.app/',
    tecnologies: [
      'React',
      'Next.js',
      'MongoDB',
      'TailwindCSS',
      'Clerk',
      'Uploadthing',
      'Shadcn',
      'Zod',
    ],
  },
  {
    icon: wizard,
    iconBg: '#ffdb60',
    title: 'Warehouse Wizard',
    date: 'Jun 2023 - Jul 2023',
    description:
      'An inventory management system for keeping track of the product stocks and prices in a store.',
    features: [
      'Signup and authenticate users',
      'Add new products or delete and edit existing products',
      'Intuitive and user-friendly interface',
      'Personalized and customizable user profile',
      'Cloudinary Integration for string photos of products and users',
    ],
    'project-url': 'https://github.com/IsbatBInHossain/Warehouse-Wizard',
    'live-link': 'https://warehouse-wizard.vercel.app/',
    tecnologies: [
      'React',
      'Express.js',
      'MongoDB',
      'Redux',
      'Node.js',
      'Cloudinary',
      'SCSS',
    ],
  },
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/IsbatBInHossain',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/isbat-bin-hossain-94313b270',
  },
]

export const otherProjects = [
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Codenotes',
    description:
      ' A code editor and note-taking app, enables users to write, organize, and manage code snippets, documentation, and entire projects. ',
    link: 'https://github.com/IsbatBInHossain/codenotes',
  },
  {
    iconUrl: car,
    theme: 'btn-back-black',
    name: 'Endless Runner Game',
    description: 'Built an endless runner game using JavaScript.',
    link: 'https://github.com/IsbatBInHossain/endless-runner-game',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-yellow',
    name: 'Propmt Central',
    description:
      'Built an AI prompt sharing platform built with Next.js and Tailwind CSS. This platform allows users to explore and discover a wide range of AI prompts contributed by the community',
    link: 'https://github.com/IsbatBInHossain/prompt-central',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-blue',
    name: 'Tech Haven',
    description:
      'Developed an e-commerce site with Payload CMS with a streamlined admin panel, secured authentication, and efficient payment processing through Stripe',
    link: 'https://github.com/IsbatBInHossain/Tech-Haven',
  },
]
