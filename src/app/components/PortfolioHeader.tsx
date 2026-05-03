export default function PortfolioHeader() {
  return (
    <header className="mb-24">
      <h1 className="mb-4" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, color: '#111', letterSpacing: '-0.02em' }}>
        Alex Morgan
      </h1>
      <p className="mb-3" style={{ fontSize: '17px', color: '#111', lineHeight: 1.6, fontWeight: 400 }}>
        Product designer focused on creating intuitive and engaging experiences.
      </p>
      <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.6 }}>
        San Francisco, CA · Available for freelance
      </p>
    </header>
  );
}
