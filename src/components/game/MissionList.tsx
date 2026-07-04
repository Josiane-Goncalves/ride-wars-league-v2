import type { Mission } from '../../types/game';
import { getProgressPercent } from '../../utils/xpSystem';
import { GamePanel } from './GamePanel';

type MissionListProps = {
  title: string;
  missions: Mission[];
};

export function MissionList({ title, missions }: MissionListProps) {
  const completedMissions = missions.filter(
    (mission) => mission.progress >= mission.goal,
  );

  return (
    <GamePanel
      title={title}
      rightContent={`${completedMissions.length}/${missions.length}`}
    >
      <div className="mission-list">
        {missions.map((mission) => {
          const isCompleted = mission.progress >= mission.goal;
          const percent = getProgressPercent(mission.progress, mission.goal);

          return (
            <article
              className={`mission-item ${
                isCompleted ? 'mission-item-completed' : ''
              }`}
              key={mission.id}
            >
              <div className="mission-status">
                {isCompleted ? '✓' : '○'}
              </div>

              <div className="mission-content">
                <strong>{mission.title}</strong>
                <p>{mission.description}</p>

                <div className="mission-progress-line">
                  <span>
                    {mission.progress}/{mission.goal} {mission.unit}
                  </span>

                  <span>{percent}%</span>
                </div>
              </div>

              <strong className="mission-reward">+{mission.rewardXp} XP</strong>
            </article>
          );
        })}
      </div>
    </GamePanel>
  );
}