export default function Contact() {
  return (
    <section className="pt-12" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
      <h2 className="mb-8" style={{
        fontSize: '11px',
        fontWeight: 600,
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
        Get in Touch
      </h2>
      <a
        href="mailto:alex@example.com"
        className="inline-block mb-8 relative"
        style={{
          fontSize: '17px',
          color: '#111',
          fontWeight: 500,
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
        alex@example.com
        <span
          className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current"
          style={{ opacity: 0, transition: 'opacity 150ms ease' }}
        />
      </a>
      <div className="flex gap-8">
        <a
          href="#"
          style={{
            fontSize: '14px',
            color: '#666',
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          LinkedIn
        </a>
        <a
          href="#"
          style={{
            fontSize: '14px',
            color: '#666',
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          Twitter
        </a>
        <a
          href="#"
          style={{
            fontSize: '14px',
            color: '#666',
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          Dribbble
        </a>
      </div>
    </section>
  );
}
