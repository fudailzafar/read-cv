interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
}

function ExperienceItem({ company, role, period, description }: ExperienceItemProps) {
  return (
    <div className="mb-12 group">
      <div className="flex justify-between items-baseline mb-2">
        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#111', letterSpacing: '-0.01em' }}>
          {company}
        </h3>
        <span style={{ fontSize: '14px', color: '#999', fontWeight: 400 }}>
          {period}
        </span>
      </div>
      <p className="mb-3" style={{ fontSize: '15px', color: '#666', lineHeight: 1.5 }}>
        {role}
      </p>
      <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.65, maxWidth: '560px' }}>
        {description}
      </p>
    </div>
  );
}

export default function WorkExperience() {
  const experiences = [
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
        Work Experience
      </h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
}
