import { RideCard } from '../../components/rides/RideCard';
import { mockCyclists } from '../../data/mockCyclists';
import { mockRides } from '../../data/mockRides';
import {
  getRidesByStatus,
  getTotalDistance,
  getTotalElevation,
  getVerifiedRides,
} from '../../utils/rideStats';

export function DashboardPage() {
  const verifiedRides = getVerifiedRides(mockRides);
  const pendingRides = getRidesByStatus(mockRides, 'pending');
  const unverifiedRides = getRidesByStatus(mockRides, 'unverified');
  const rejectedRides = getRidesByStatus(mockRides, 'rejected');

  const totalDistance = getTotalDistance(verifiedRides);
  const totalElevation = getTotalElevation(verifiedRides);

  const latestRides = [...mockRides]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 3);

  const rankingPreview = mockCyclists
    .map((cyclist) => {
      const cyclistVerifiedRides = verifiedRides.filter(
        (ride) => ride.cyclistId === cyclist.id,
      );

      return {
        cyclist,
        totalDistance: getTotalDistance(cyclistVerifiedRides),
        totalRides: cyclistVerifiedRides.length,
      };
    })
    .sort((a, b) => b.totalDistance - a.totalDistance)
    .slice(0, 3);

  return (
    <section className="page-card">
      <span className="pixel-badge">Dashboard</span>

      <h1>Resumo da Liga</h1>

      <p>
        Visão geral dos pedais enviados, validações, ranking e progresso da
        comunidade.
      </p>

      <div className="stats-grid">
        <article className="stat-card">
          <strong>{mockCyclists.length}</strong>
          <span>Atletas</span>
        </article>

        <article className="stat-card">
          <strong>{mockRides.length}</strong>
          <span>Pedais enviados</span>
        </article>

        <article className="stat-card">
          <strong>{totalDistance} km</strong>
          <span>Distância validada</span>
        </article>

        <article className="stat-card">
          <strong>{totalElevation} m</strong>
          <span>Elevação validada</span>
        </article>
      </div>

      <div className="dashboard-section">
        <h2>Status dos pedais</h2>

        <div className="status-grid">
          <article>
            <strong>{verifiedRides.length}</strong>
            <span>Aprovados</span>
          </article>

          <article>
            <strong>{pendingRides.length}</strong>
            <span>Aguardando aprovação</span>
          </article>

          <article>
            <strong>{unverifiedRides.length}</strong>
            <span>Sem comprovação</span>
          </article>

          <article>
            <strong>{rejectedRides.length}</strong>
            <span>Rejeitados</span>
          </article>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Top 3 da liga</h2>

        <div className="ranking-list">
          {rankingPreview.map((item, index) => (
            <article className="ranking-card" key={item.cyclist.id}>
              <strong>#{index + 1}</strong>

              <div>
                <h2>{item.cyclist.name}</h2>
                <p>{item.totalRides} pedais verificados</p>
              </div>

              <span>{item.totalDistance} km</span>
            </article>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Últimos pedais enviados</h2>

        <div className="admin-rides-list">
          {latestRides.map((ride) => (
            <RideCard ride={ride} key={ride.id} />
          ))}
        </div>
      </div>
    </section>
  );
}