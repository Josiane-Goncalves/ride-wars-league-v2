import { getProgressPercent } from '../../utils/xpSystem';

type ProgressBarProps = {
  current: number;
  max: number;
  label?: string;
};

export function ProgressBar({ current, max, label }: ProgressBarProps) {
  const percent = getProgressPercent(current, max);

  return (
    <div className="game-progress">
      <div className="game-progress-track">
        <div
          className="game-progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>

      <span>{label ?? `${current}/${max}`}</span>
    </div>
  );
}