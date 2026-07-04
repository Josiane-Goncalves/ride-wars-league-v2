export function getProgressPercent(current: number, max: number) {
  if (max <= 0) {
    return 0;
  }

  const percent = Math.round((current / max) * 100);

  return Math.min(percent, 100);
}

export function formatXp(value: number) {
  return `${value.toLocaleString('pt-BR')} XP`;
}