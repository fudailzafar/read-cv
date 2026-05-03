import { Link } from 'react-router';

interface BlogPostPreviewProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

function BlogPostPreview({ slug, title, excerpt, date, readTime }: BlogPostPreviewProps) {
  return (
    <article className="mb-12 group">
      <Link to={`/writing/${slug}`} className="block">
        <h2
          className="mb-2 relative inline-block"
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
        <p className="mb-2" style={{ fontSize: '15px', color: '#666', lineHeight: 1.65, maxWidth: '560px' }}>
          {excerpt}
        </p>
        <div className="flex gap-3" style={{ fontSize: '14px', color: '#999' }}>
          <time>{date}</time>
          <span>·</span>
          <span>{readTime}</span>
        </div>
      </Link>
    </article>
  );
}

export default function BlogIndex() {
  const posts = [
    {
      slug: 'design-systems-that-scale',
      title: 'Building design systems that scale',
      excerpt: 'Lessons learned from creating component libraries that serve teams across multiple products and platforms.',
      date: 'Jan 15, 2025',
      readTime: '5 min read'
    },
    {
      slug: 'future-of-mobile-interfaces',
      title: 'The future of mobile interfaces',
      excerpt: 'Exploring emerging patterns in mobile design and how they are reshaping user expectations.',
      date: 'Dec 8, 2024',
      readTime: '4 min read'
    },
    {
      slug: 'design-thinking-in-practice',
      title: 'Design thinking in practice',
      excerpt: 'How to apply design thinking frameworks to real-world product challenges without the buzzwords.',
      date: 'Nov 22, 2024',
      readTime: '6 min read'
    },
    {
      slug: 'minimalism-in-web-design',
      title: 'Minimalism in modern web design',
      excerpt: 'Why less is more when it comes to creating focused, user-friendly digital experiences.',
      date: 'Oct 5, 2023',
      readTime: '3 min read'
    }
  ];

  return (
    <div>
      <header className="mb-16">
        <h1 className="mb-3" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, color: '#111', letterSpacing: '-0.02em' }}>
          Writing
        </h1>
        <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6 }}>
          Thoughts on design, systems, and building better products.
        </p>
      </header>

      <div>
        {posts.map((post) => (
          <BlogPostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
