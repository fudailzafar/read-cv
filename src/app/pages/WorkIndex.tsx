import { Link } from 'react-router';

interface ProjectPreviewProps {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
}

function ProjectPreview({ slug, title, description, year, tags }: ProjectPreviewProps) {
  return (
    <article className="mb-12 group">
      <Link to={`/work/${slug}`} className="block">
        <div className="flex justify-between items-baseline mb-2">
          <h2
            className="relative inline-block"
            style={{
              fontSize: '17px',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.01em',
              transition: 'opacity 150ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            {title}
          </h2>
          <span style={{ fontSize: '14px', color: '#999' }}>
            {year}
          </span>
        </div>
        <p className="mb-2" style={{ fontSize: '15px', color: '#666', lineHeight: 1.65, maxWidth: '560px' }}>
          {description}
        </p>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: '13px', color: '#999' }}>
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}

export default function WorkIndex() {
  const projects = [
    {
      slug: 'design-system',
      title: 'Design System 2.0',
      description: 'Complete redesign of component library with accessibility-first approach and improved developer experience.',
      year: '2024',
      tags: ['Design System', 'Web']
    },
    {
      slug: 'mobile-app',
      title: 'Mobile App Redesign',
      description: 'Led UX research and interface design for iOS and Android apps, resulting in significant engagement improvements.',
      year: '2023',
      tags: ['Mobile', 'UI Design']
    },
    {
      slug: 'marketing-website',
      title: 'Marketing Website',
      description: 'Designed and prototyped new marketing site with focus on conversion optimization and brand storytelling.',
      year: '2023',
      tags: ['Web', 'Branding']
    },
    {
      slug: 'dashboard-redesign',
      title: 'Analytics Dashboard',
      description: 'Redesigned complex data visualization interface to improve clarity and user decision-making.',
      year: '2022',
      tags: ['Dashboard', 'Data Viz']
    }
  ];

  return (
    <div>
      <header className="mb-16">
        <h1 className="mb-3" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, color: '#111', letterSpacing: '-0.02em' }}>
          Selected Work
        </h1>
        <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6 }}>
          Case studies and projects from recent years.
        </p>
      </header>

      <div>
        {projects.map((project) => (
          <ProjectPreview key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
