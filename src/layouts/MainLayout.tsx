import { NavLink, Outlet } from 'react-router';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/new-ride', label: 'Novo Pedal' },
  { path: '/ranking', label: 'Ranking' },
  { path: '/badges', label: 'Badges' },
  { path: '/profile', label: 'Perfil' },
  { path: '/admin', label: 'Admin' },
];

export function MainLayout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <strong>Ride Wars League</strong>

        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  );
}