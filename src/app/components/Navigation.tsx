import { Link, useLocation } from 'react-router';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="mb-24 flex justify-between items-center">
      <Link
        to="/"
        style={{
          fontSize: '15px',
          fontWeight: 600,
          color: '#111',
          letterSpacing: '-0.01em',
          transition: 'opacity 150ms ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        Alex Morgan
      </Link>

      <div className="flex gap-8">
        <Link
          to="/work"
          className="relative"
          style={{
            fontSize: '14px',
            color: isActive('/work') ? '#111' : '#666',
            fontWeight: isActive('/work') ? 500 : 400,
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => {
            if (!isActive('/work')) e.currentTarget.style.color = '#666';
          }}
        >
          Work
        </Link>
        <Link
          to="/writing"
          className="relative"
          style={{
            fontSize: '14px',
            color: isActive('/writing') ? '#111' : '#666',
            fontWeight: isActive('/writing') ? 500 : 400,
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => {
            if (!isActive('/writing')) e.currentTarget.style.color = '#666';
          }}
        >
          Writing
        </Link>
        <Link
          to="/"
          className="relative"
          style={{
            fontSize: '14px',
            color: location.pathname === '/' ? '#111' : '#666',
            fontWeight: location.pathname === '/' ? 500 : 400,
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
          onMouseLeave={(e) => {
            if (location.pathname !== '/') e.currentTarget.style.color = '#666';
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
