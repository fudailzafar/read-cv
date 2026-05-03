import { Link, useParams } from 'react-router';

export default function BlogArticle() {
  const { slug } = useParams();

  // Mock article data - in real app, would fetch based on slug
  const article = {
    title: 'Building design systems that scale',
    date: 'Jan 15, 2025',
    author: 'Alex Morgan',
    content: `Design systems have become an essential part of modern product development. They provide a shared language between designers and developers, ensure consistency across products, and dramatically speed up the design and development process.

But building a design system that truly scales — one that serves multiple teams, multiple products, and evolves over time — requires careful planning and ongoing maintenance.

## Start with principles, not components

The biggest mistake teams make is jumping straight into building components. Before you create a single button, establish your design principles. What matters most to your product? Speed? Accessibility? Flexibility?

These principles will guide every decision you make, from color choices to component APIs.

## Build for the 80% case

Don't try to solve every edge case upfront. Focus on the patterns that appear most frequently across your products. Build components that handle these common scenarios extremely well.

You can always extend components later as new needs emerge. Starting too broad creates complexity that slows everyone down.

## Documentation is not optional

A component without documentation might as well not exist. Every component needs clear guidelines on when to use it, how to use it, and when not to use it.

Include code examples, visual examples, accessibility considerations, and common gotchas. Make it easy for people to do the right thing.

## Governance and evolution

Design systems are never "done." They need a clear ownership model and a process for proposing changes. Create a small core team responsible for maintaining quality and consistency, but make it easy for anyone to contribute.

The best design systems evolve alongside the products they serve, not in isolation.`
  };

  return (
    <div>
      <Link
        to="/writing"
        className="inline-block mb-12"
        style={{
          fontSize: '14px',
          color: '#999',
          transition: 'color 150ms ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
      >
        ← Back to writing
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="mb-4" style={{
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#111',
            letterSpacing: '-0.02em'
          }}>
            {article.title}
          </h1>
          <div className="flex gap-3" style={{ fontSize: '14px', color: '#999' }}>
            <time>{article.date}</time>
            <span>·</span>
            <span>{article.author}</span>
          </div>
        </header>

        <div
          style={{
            fontSize: '16px',
            color: '#111',
            lineHeight: 1.7,
            maxWidth: '65ch'
          }}
        >
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={index}
                  className="mt-12 mb-4"
                  style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#111',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            return (
              <p key={index} className="mb-6" style={{ color: '#333' }}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      <footer className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <Link
          to="/writing"
          style={{
            fontSize: '14px',
            color: '#666',
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          ← Back to all posts
        </Link>
      </footer>
    </div>
  );
}
