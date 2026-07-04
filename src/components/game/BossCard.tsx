import type { WeeklyBoss } from '../../types/game';
import { GamePanel } from './GamePanel';
import { ProgressBar } from './ProgressBar';

type BossCardProps = {
  boss: WeeklyBoss;
};

export function BossCard({ boss }: BossCardProps) {
  return (
    <GamePanel
      title="Boss da Semana"
      variant="danger"
      rightContent={`+${boss.rewardXp} XP`}
    >
      <div className="boss-card-content">
        <div className="boss-icon">{boss.icon}</div>

        <div>
          <h2>{boss.name}</h2>
          <p>{boss.subtitle}</p>
          <small>{boss.description}</small>
        </div>
      </div>

      <ProgressBar
        current={boss.currentHp}
        max={boss.maxHp}
        label={`${boss.currentHp}/${boss.maxHp} HP`}
      />
    </GamePanel>
  );
}