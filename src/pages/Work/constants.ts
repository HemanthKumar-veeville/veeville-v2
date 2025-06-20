export const CAROUSEL_INTERVAL = 5000; // 5 seconds
export const API_BASE_URL = 'http://localhost:1337';

export const SECTION_TITLES = {
  DESIGN_FOR_LIFE: {
    main: 'Design',
    sub: 'for life.',
  },
  PORTFOLIO: {
    main: 'Creating desire at every touch point.',
    description: 'We craft powerful stories and design experiences across the complete brand experience to build timeless brand value.',
  },
  RELATED_PROJECTS: 'Related Projects',
} as const;

export const FOOTER_SECTIONS = {
  CONTACT: {
    title: 'Contact',
    text: 'Get in touch with us to discuss your next project.',
  },
  NEWSLETTER: {
    title: 'Newsletter',
    text: 'Subscribe to our newsletter for updates and insights.',
  },
  JOIN_US: {
    title: 'Join Us',
    text: 'View open positions',
    link: '/careers',
  },
  LOCATION: 'Mumbai, India',
} as const;

export const COPYRIGHT = {
  text: '© 2024 Veeville. All rights reserved.',
  links: [
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms of Service', href: '/terms' },
  ],
} as const; 