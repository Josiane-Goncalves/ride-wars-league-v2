export type RideGroup = {
  id: string;
  name: string;
  code: string;
  description: string;
  membersIds: string[];
  createdById: string;
};

export type GroupChallengeStatus = 'active' | 'completed';

export type GroupChallenge = {
    id: string;
    groupId: string;
    title: string;
    description: string;
    targetKm: number;
    currentKm: number;
    rewardXp: number;
    status: GroupChallengeStatus;
};

export type GroupActivityType =
    | 'ride_submitted'
    | 'challenge_created'
    | 'taunt';

export type GroupActivity = {
    id: string;
    groupId: string;
    cyclistId: string;
    type: GroupActivityType;
    message: string;
    createdAt: string;
};

