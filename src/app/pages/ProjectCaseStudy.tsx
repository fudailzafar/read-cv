import { Link, useParams } from 'react-router';

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  // Mock project data
  const project = {
    title: 'Design System 2.0',
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
  };

  return (
    <div>
      <Link
        to="/work"
        className="inline-block mb-12"
        style={{
          fontSize: '14px',
          color: '#999',
          transition: 'color 150ms ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
      >
        ← Back to work
      </Link>

      <article>
        <header className="mb-16">
          <h1 className="mb-3" style={{
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#111',
            letterSpacing: '-0.02em'
          }}>
            {project.title}
          </h1>
          <p className="mb-6" style={{ fontSize: '17px', color: '#666', lineHeight: 1.6 }}>
            {project.subtitle}
          </p>
          <div className="flex gap-6" style={{ fontSize: '14px', color: '#999' }}>
            <div>
              <span style={{ color: '#999' }}>Year:</span>{' '}
              <span style={{ color: '#666' }}>{project.year}</span>
            </div>
            <div>
              <span style={{ color: '#999' }}>Role:</span>{' '}
              <span style={{ color: '#666' }}>{project.role}</span>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="mb-4" style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}>
            Overview
          </h2>
          <p style={{ fontSize: '16px', color: '#333', lineHeight: 1.7, maxWidth: '65ch' }}>
            {project.overview}
          </p>
        </section>

        {/* Metrics */}
        <section className="mb-16 pb-16" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
          <div className="grid grid-cols-3 gap-8">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div style={{ fontSize: '28px', fontWeight: 600, color: '#111', marginBottom: '4px' }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '13px', color: '#999' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case study sections */}
        {project.sections.map((section, index) => (
          <section key={index} className="mb-16">
            <h2 className="mb-6" style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.01em'
            }}>
              {section.heading}
            </h2>
            <p style={{ fontSize: '16px', color: '#333', lineHeight: 1.7, maxWidth: '65ch' }}>
              {section.content}
            </p>
          </section>
        ))}
      </article>

      <footer className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <Link
          to="/work"
          style={{
            fontSize: '14px',
            color: '#666',
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          ← Back to all projects
        </Link>
      </footer>
    </div>
  );
}
