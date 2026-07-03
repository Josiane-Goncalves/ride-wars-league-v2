import type { Badge, Ride } from '../../types/ride';
import { mockBadges } from '../../data/mockBadges';
import { mockCyclists } from '../../data/mockCyclists';
import { mockRides } from '../../data/mockRides';

function checkBadgeUnlocked(badge: Badge, rides: Ride[]) {
  const verifiedRides = rides.filter((ride) => ride.status === 'verified');

  if (badge.rule === 'first_ride') {
    return verifiedRides.length >= badge.requiredValue;
  }

  if (badge.rule === 'distance_single_ride') {
    return verifiedRides.some(
      (ride) => ride.distanceKm >= badge.requiredValue,
    );
  }

  if (badge.rule === 'elevation_single_ride') {
    return verifiedRides.some(
      (ride) => ride.elevationGainM >= badge.requiredValue,
    );
  }

  return false;
}

export function BadgesPage() {
  const currentCyclist = mockCyclists[0];

  const currentCyclistRides = mockRides.filter(
    (ride) => ride.cyclistId === currentCyclist.id,
  );

  const unlockedBadges = mockBadges.filter((badge) =>
    checkBadgeUnlocked(badge, currentCyclistRides),
  );

  return (
    <section className="page-card">
      <span className="pixel-badge">Badges</span>

      <h1>Conquistas</h1>

      <p>
        Ciclista atual: <strong>{currentCyclist.name}</strong>
      </p>

      <div className="badge-summary">
        <strong>
          {unlockedBadges.length}/{mockBadges.length}
        </strong>
        <span>badges desbloqueadas</span>
      </div>

      <div className="badges-grid">
        {mockBadges.map((badge) => {
          const isUnlocked = checkBadgeUnlocked(badge, currentCyclistRides);

          return (
            <article
              className={`badge-card ${isUnlocked ? 'badge-card-unlocked' : 'badge-card-locked'}`}
              key={badge.id}
            >
              <span className="badge-icon">{badge.icon}</span>

              <div>
                <h2>{badge.name}</h2>
                <p>{badge.description}</p>
              </div>

              <strong>{isUnlocked ? 'Desbloqueada' : 'Bloqueada'}</strong>
            </article>
          );
        })}
      </div>
    </section>
  );
}