import { Outlet } from 'react-router';
import Navigation from './components/Navigation';

export default function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <main className="max-w-[680px] mx-auto px-8 py-24 md:py-32">
        <Navigation />
        <Outlet />
      </main>
    </div>
  );
}
