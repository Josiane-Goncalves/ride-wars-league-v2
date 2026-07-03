import { RideCard } from '../../components/rides/RideCard';
import { mockBadges } from '../../data/mockBadges';
import { mockCyclists } from '../../data/mockCyclists';
import { mockRides } from '../../data/mockRides';
import { checkBadgeUnlocked } from '../../utils/checkBadgeUnlocked';

export function ProfilePage() {
  const currentCyclist = mockCyclists[0];

  const currentCyclistRides = mockRides.filter(
    (ride) => ride.cyclistId === currentCyclist.id,
  );

  const verifiedRides = currentCyclistRides.filter(
    (ride) => ride.status === 'verified',
  );

  const totalDistance = verifiedRides.reduce(
    (total, ride) => total + ride.distanceKm,
    0,
  );

  const totalElevation = verifiedRides.reduce(
    (total, ride) => total + ride.elevationGainM,
    0,
  );

  const unlockedBadges = mockBadges.filter((badge) =>
    checkBadgeUnlocked(badge, currentCyclistRides),
  );

  return (
    <section className="page-card">
      <span className="pixel-badge">Perfil</span>

      <div className="profile-header">
        <div className="profile-avatar">
          {currentCyclist.name.charAt(0)}
        </div>

        <div>
          <h1>{currentCyclist.name}</h1>
          <p>{currentCyclist.city}</p>
        </div>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <strong>{verifiedRides.length}</strong>
          <span>Pedais verificados</span>
        </article>

        <article className="stat-card">
          <strong>{totalDistance} km</strong>
          <span>Distância validada</span>
        </article>

        <article className="stat-card">
          <strong>{totalElevation} m</strong>
          <span>Elevação validada</span>
        </article>

        <article className="stat-card">
          <strong>
            {unlockedBadges.length}/{mockBadges.length}
          </strong>
          <span>Badges desbloqueadas</span>
        </article>
      </div>

      <div className="profile-section">
        <h2>Badges desbloqueadas</h2>

        {unlockedBadges.length === 0 && (
          <p className="empty-state">Nenhuma badge desbloqueada ainda.</p>
        )}

        <div className="profile-badges-list">
          {unlockedBadges.map((badge) => (
            <article className="profile-badge" key={badge.id}>
              <span>{badge.icon}</span>
              <strong>{badge.name}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h2>Histórico de pedais</h2>

        {currentCyclistRides.length === 0 && (
          <p className="empty-state">Nenhum pedal encontrado.</p>
        )}

        <div className="admin-rides-list">
          {currentCyclistRides.map((ride) => (
            <RideCard ride={ride} key={ride.id} />
          ))}
        </div>
      </div>
    </section>
  );
}