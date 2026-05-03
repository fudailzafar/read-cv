import { Link } from 'react-router';

interface ProjectItemProps {
  title: string;
  description: string;
  link?: string;
}

function ProjectItem({ title, description, link }: ProjectItemProps) {
  return (
    <div className="mb-10 group">
      <h3 className="mb-2" style={{ fontSize: '17px', fontWeight: 600, color: '#111', letterSpacing: '-0.01em' }}>
        {title}
      </h3>
      <p className="mb-3" style={{ fontSize: '15px', color: '#666', lineHeight: 1.65, maxWidth: '560px' }}>
        {description}
      </p>
      {link && (
        <Link
          to={link}
          className="inline-block relative"
          style={{
            fontSize: '14px',
            color: '#111',
            transition: 'opacity 150ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.6';
            const underline = e.currentTarget.querySelector('.underline-hover') as HTMLElement;
            if (underline) underline.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            const underline = e.currentTarget.querySelector('.underline-hover') as HTMLElement;
            if (underline) underline.style.opacity = '0';
          }}
        >
          View project →
          <span
            className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current"
            style={{ opacity: 0, transition: 'opacity 150ms ease' }}
          />
        </Link>
      )}
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Design System 2.0',
      description: 'Complete redesign of component library with accessibility-first approach and improved documentation.',
      link: '/work/design-system'
    },
    {
      title: 'Mobile App Redesign',
      description: 'Led UX research and interface design for iOS and Android apps, resulting in 40% increase in user engagement.',
      link: '/work/mobile-app'
    },
    {
      title: 'Marketing Website',
      description: 'Designed and prototyped new marketing site with focus on conversion optimization and brand storytelling.',
      link: '/work/marketing-website'
    }
  ];

  return (
    <section className="mb-24">
      <h2 className="mb-8" style={{
        fontSize: '11px',
        fontWeight: 600,
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
        Selected Projects
      </h2>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </section>
  );
}
