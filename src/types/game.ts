export type PlayerProfile = {
  cyclistId: string;
  displayName: string;
  title: string;
  bikeName: string;
  avatar: string;
  level: number;
  levelName: string;
  xp: number;
  currentLevelXp: number;
  nextLevelXp: number;
};

export type WeeklyBoss = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  currentHp: number;
  maxHp: number;
  rewardXp: number;
};

export type MissionType = 'daily' | 'weekly';

export type Mission = {
  id: string;
  type: MissionType;
  title: string;
  description: string;
  rewardXp: number;
  progress: number;
  goal: number;
  unit: string;
};