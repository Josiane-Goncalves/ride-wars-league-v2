import { mockCyclists } from '../../data/mockCyclists';
import { mockRides } from '../../data/mockRides';

export function RankingPage() {
  const ranking = mockCyclists
    .map((cyclist) => {
      const cyclistVerifiedRides = mockRides.filter(
        (ride) => ride.cyclistId === cyclist.id && ride.status === 'verified',
      );

      const totalDistance = cyclistVerifiedRides.reduce(
        (total, ride) => total + ride.distanceKm,
        0,
      );

      return {
        cyclist,
        totalDistance,
        totalRides: cyclistVerifiedRides.length,
      };
    })
    .sort((a, b) => b.totalDistance - a.totalDistance);

  return (
    <section className="page-card">
      <span className="pixel-badge">Ranking</span>

      <h1>Ranking da Liga</h1>

      <div className="ranking-list">
        {ranking.map((item, index) => (
          <article className="ranking-card" key={item.cyclist.id}>
            <strong>#{index + 1}</strong>

            <div>
              <h2>{item.cyclist.name}</h2>
              <p>{item.cyclist.city}</p>
            </div>

            <span>{item.totalDistance} km</span>
          </article>
        ))}
      </div>
    </section>
  );
}