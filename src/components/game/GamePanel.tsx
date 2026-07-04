import type { ReactNode } from 'react';

type GamePanelProps = {
  title: string;
  children: ReactNode;
  rightContent?: ReactNode;
  variant?: 'default' | 'danger' | 'warning';
};

export function GamePanel({
  title,
  children,
  rightContent,
  variant = 'default',
}: GamePanelProps) {
  return (
    <section className={`game-panel game-panel-${variant}`}>
      <header className="game-panel-header">
        <strong>▸ {title}</strong>
        {rightContent && <span>{rightContent}</span>}
      </header>

      {children}
    </section>
  );
}