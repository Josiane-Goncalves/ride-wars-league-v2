import { mockCyclists } from '../../data/mockCyclists';
import { mockRides } from '../../data/mockRides';

export function DashboardPage() {
  const totalCyclists = mockCyclists.length;
  const totalRides = mockRides.length;
  const verifiedRides = mockRides.filter((ride) => ride.status === 'verified');
  const totalDistance = verifiedRides.reduce(
    (total, ride) => total + ride.distanceKm,
    0,
  );

  return (
    <section className="page-card">
      <span className="pixel-badge">Dashboard</span>

      <h1>Resumo da Liga</h1>

      <div className="stats-grid">
        <article className="stat-card">
          <strong>{totalCyclists}</strong>
          <span>Ciclistas</span>
        </article>

        <article className="stat-card">
          <strong>{totalRides}</strong>
          <span>Pedais enviados</span>
        </article>

        <article className="stat-card">
          <strong>{verifiedRides.length}</strong>
          <span>Pedais verificados</span>
        </article>

        <article className="stat-card">
          <strong>{totalDistance} km</strong>
          <span>Distância validada</span>
        </article>
      </div>
    </section>
  );
}