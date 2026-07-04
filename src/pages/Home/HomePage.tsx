import { BossCard } from '../../components/game/BossCard';
import { GamePanel } from '../../components/game/GamePanel';
import { MissionList } from '../../components/game/MissionList';
import { PlayerHeader } from '../../components/game/PlayerHeader';
import { AppLinkButton } from '../../components/ui/AppLinkButton';
import { mockBadges } from '../../data/mockBadges';
import { mockCyclists } from '../../data/mockCyclists';
import { mockWeeklyBoss } from '../../data/mockBosses';
import { mockMissions } from '../../data/mockMissions';
import { mockPlayerProfile } from '../../data/mockPlayerProfile';
import { mockRides } from '../../data/mockRides';
import { checkBadgeUnlocked } from '../../utils/checkBadgeUnlocked';
import { getTotalDistance, getVerifiedRides } from '../../utils/rideStats';

export function HomePage() {
  const currentCyclist =
    mockCyclists.find(
      (cyclist) => cyclist.id === mockPlayerProfile.cyclistId,
    ) ?? mockCyclists[0];

  const currentCyclistRides = mockRides.filter(
    (ride) => ride.cyclistId === currentCyclist.id,
  );

  const verifiedRides = getVerifiedRides(mockRides);
  const currentCyclistVerifiedRides = getVerifiedRides(currentCyclistRides);

  const totalDistance = getTotalDistance(currentCyclistVerifiedRides);

  const dailyMissions = mockMissions.filter(
    (mission) => mission.type === 'daily',
  );

  const weeklyMissions = mockMissions.filter(
    (mission) => mission.type === 'weekly',
  );

  const unlockedBadges = mockBadges.filter((badge) =>
    checkBadgeUnlocked(badge, currentCyclistRides),
  );

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
    <section className="game-home">
      <PlayerHeader player={mockPlayerProfile} />

      <div className="game-action-row">
        <AppLinkButton to="/new-ride">▶ Registrar Pedal</AppLinkButton>

        <AppLinkButton to="/ranking" variant="secondary">
          🏆 Placar da Treta
        </AppLinkButton>
      </div>

      <div className="game-home-grid">
        <div className="game-home-main">
          <BossCard boss={mockWeeklyBoss} />

          <MissionList title="Missões Diárias" missions={dailyMissions} />

          <MissionList title="Missões Semanais" missions={weeklyMissions} />
        </div>

        <aside className="game-home-side">
          <GamePanel title="Resumo do Atleta">
            <div className="game-stats-mini-grid">
              <article>
                <strong>{totalDistance} km</strong>
                <span>Km validados</span>
              </article>

              <article>
                <strong>{currentCyclistVerifiedRides.length}</strong>
                <span>Pedais aprovados</span>
              </article>

              <article>
                <strong>{unlockedBadges.length}/{mockBadges.length}</strong>
                <span>Conquistas</span>
              </article>

              <article>
                <strong>{mockPlayerProfile.bikeName}</strong>
                <span>Bike atual</span>
              </article>
            </div>
          </GamePanel>

          <GamePanel title="Placar da Treta" rightContent="TOP 3">
            <div className="quick-ranking-list">
              {rankingPreview.map((item, index) => (
                <article className="quick-ranking-item" key={item.cyclist.id}>
                  <strong>#{index + 1}</strong>

                  <div>
                    <span>{item.cyclist.name}</span>
                    <small>{item.totalRides} pedais aprovados</small>
                  </div>

                  <b>{item.totalDistance} km</b>
                </article>
              ))}
            </div>
          </GamePanel>

          <GamePanel
            title="Conquistas Recentes"
            rightContent={`${unlockedBadges.length}/${mockBadges.length}`}
          >
            <div className="mini-badges-grid">
              {mockBadges.map((badge) => {
                const isUnlocked = checkBadgeUnlocked(
                  badge,
                  currentCyclistRides,
                );

                return (
                  <article
                    className={`mini-badge ${
                      isUnlocked ? 'mini-badge-unlocked' : 'mini-badge-locked'
                    }`}
                    key={badge.id}
                  >
                    <span>{badge.icon}</span>
                    <strong>{badge.name}</strong>
                  </article>
                );
              })}
            </div>
          </GamePanel>
        </aside>
      </div>
    </section>
  );
}