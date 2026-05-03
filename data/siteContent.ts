export const siteContent = {
  header: {
    name: 'Alex Morgan',
    role: 'Product designer focused on creating intuitive and engaging experiences.',
    location: 'San Francisco, CA · Available for freelance',
  },
  experience: [
    {
      company: 'Acme Design Studio',
      role: 'Senior Product Designer',
      period: '2022 — Now',
      description: 'Leading design for core product features and design system. Collaborating with engineering to ship intuitive experiences.'
    },
    {
      company: 'Startup Inc',
      role: 'Product Designer',
      period: '2019 — 2022',
      description: 'Designed end-to-end flows for mobile and web. Established design processes and visual identity from ground up.'
    },
    {
      company: 'Creative Agency',
      role: 'Junior Designer',
      period: '2017 — 2019',
      description: 'Supported client projects across branding, web design, and marketing materials. Learned fundamentals of user-centered design.'
    }
  ],
  projects: [
    {
      title: 'Design System 2.0',
      description: 'Complete redesign of component library with accessibility-first approach and improved documentation.',
      slug: 'design-system',
      subtitle: 'Building a scalable component library',
      year: '2024',
      role: 'Lead Designer',
      overview: 'Led the complete redesign of our design system to improve accessibility, developer experience, and visual consistency across all products.',
      sections: [
        {
          heading: 'Challenge',
          content: 'Our existing design system had grown organically over three years. Components were inconsistent, documentation was sparse, and accessibility was an afterthought. Teams were creating one-off solutions instead of using shared components.'
        },
        {
          heading: 'Approach',
          content: 'We started with research — interviewing designers and developers to understand pain points. Then we established clear design principles: accessibility first, composable components, and excellent documentation. We rebuilt the system incrementally, starting with the most-used components.'
        },
        {
          heading: 'Process',
          content: 'Each component went through a rigorous process: design exploration, accessibility review, API design with engineers, implementation, documentation, and migration planning. We worked in two-week sprints, shipping updates continuously while maintaining backwards compatibility.'
        },
        {
          heading: 'Outcome',
          content: 'The new system is now used across 12 products and 8 teams. Component adoption increased by 60%, design-to-development handoff time decreased by 40%, and all components meet WCAG AA standards. Most importantly, teams report higher confidence and faster iteration.'
        }
      ],
      metrics: [
        { label: 'Component adoption', value: '+60%' },
        { label: 'Handoff time', value: '-40%' },
        { label: 'Teams using system', value: '8' }
      ]
    },
    {
      title: 'Mobile App Redesign',
      description: 'Led UX research and interface design for iOS and Android apps, resulting in 40% increase in user engagement.',
      slug: 'mobile-app',
      subtitle: 'Revamping the core mobile experience',
      year: '2023',
      role: 'Senior Product Designer',
      overview: 'Redesigned the entire mobile experience focusing on core user flows, resulting in significantly higher engagement and retention.',
      sections: [
        {
          heading: 'Challenge',
          content: 'Users found the existing mobile application difficult to navigate, and drop-off rates were high during onboarding.'
        },
        {
          heading: 'Outcome',
          content: 'The new design improved onboarding completion rates by 35% and increased daily active users.'
        }
      ],
      metrics: [
        { label: 'User engagement', value: '+40%' },
        { label: 'Onboarding completion', value: '+35%' }
      ]
    },
    {
      title: 'Marketing Website',
      description: 'Designed and prototyped new marketing site with focus on conversion optimization and brand storytelling.',
      slug: 'marketing-website',
      subtitle: 'Telling a better brand story',
      year: '2022',
      role: 'Product Designer',
      overview: 'A complete overhaul of the company marketing website to better tell the brand story and drive conversions.',
      sections: [
        {
          heading: 'Process',
          content: 'Collaborated closely with marketing to align on messaging and created interactive prototypes for user testing before implementation.'
        }
      ],
      metrics: [
        { label: 'Conversion rate', value: '+25%' },
        { label: 'Bounce rate', value: '-15%' }
      ]
    }
  ],
  writing: [
    { title: 'Building design systems that scale', year: '2025', slug: 'design-systems-that-scale', content: 'In today’s fast-paced tech environment, a robust design system is not just a nice-to-have; it’s a critical infrastructure for scaling products efficiently...' },
    { title: 'The future of mobile interfaces', year: '2024', slug: 'future-of-mobile-interfaces', content: 'As mobile devices evolve, so too must our interfaces. The shift towards gesture-based navigation and augmented reality is changing how we interact with technology.' },
    { title: 'Design thinking in practice', year: '2024', slug: 'design-thinking-in-practice', content: 'Design thinking is often misunderstood as merely a creative process, but it is fundamentally a problem-solving methodology that centers around user needs.' },
    { title: 'Minimalism in modern web design', year: '2023', slug: 'minimalism-in-web-design', content: 'Minimalism is more than just a visual aesthetic. It is a philosophy that prioritizes content and usability by removing unnecessary distractions.' }
  ],
  contact: {
    email: 'alex@example.com',
    socials: [
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'Dribbble', url: '#' }
    ]
  }
};
