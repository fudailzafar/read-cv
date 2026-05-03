import { Link } from 'react-router';

interface WritingItemProps {
  title: string;
  year: string;
  slug: string;
}

function WritingItem({ title, year, slug }: WritingItemProps) {
  return (
    <div className="flex justify-between items-baseline mb-5 group py-1">
      <Link
        to={`/writing/${slug}`}
        className="relative inline-block"
        style={{
          fontSize: '15px',
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
        {title}
        <span
          className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current"
          style={{ opacity: 0, transition: 'opacity 150ms ease' }}
        />
      </Link>
      <span style={{ fontSize: '14px', color: '#999', fontWeight: 400 }}>
        {year}
      </span>
    </div>
  );
}

export default function Writing() {
  const articles = [
    { title: 'Building design systems that scale', year: '2025', slug: 'design-systems-that-scale' },
    { title: 'The future of mobile interfaces', year: '2024', slug: 'future-of-mobile-interfaces' },
    { title: 'Design thinking in practice', year: '2024', slug: 'design-thinking-in-practice' },
    { title: 'Minimalism in modern web design', year: '2023', slug: 'minimalism-in-web-design' }
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
        Writing
      </h2>
      {articles.map((article, index) => (
        <WritingItem key={index} {...article} />
      ))}
    </section>
  );
}
