import type { PlayerProfile } from '../../types/game';
import { formatXp } from '../../utils/xpSystem';
import { ProgressBar } from './ProgressBar';

type PlayerHeaderProps = {
  player: PlayerProfile;
};

export function PlayerHeader({ player }: PlayerHeaderProps) {
  return (
    <section className="player-header-card">
      <div className="player-avatar">{player.avatar}</div>

      <div className="player-info">
        <span>Ride Wars League</span>

        <h1>{player.displayName}</h1>

        <p>
          {player.title} • Bike: <strong>{player.bikeName}</strong>
        </p>

        <div className="player-level-row">
          <strong>
            LVL {player.level} — {player.levelName}
          </strong>

          <span>{formatXp(player.xp)}</span>
        </div>

        <ProgressBar
          current={player.currentLevelXp}
          max={player.nextLevelXp}
          label={`${player.currentLevelXp}/${player.nextLevelXp} XP para o próximo nível`}
        />
      </div>
    </section>
  );
}