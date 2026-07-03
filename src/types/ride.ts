export type RideStatus = 'unverified' | 'pending' | 'verified' | 'rejected';

export type Cyclist = {
  id: string;
  name: string;
  city: string;
  avatarUrl?: string;
};

export type Ride = {
  id: string;
  cyclistId: string;
  title: string;
  distanceKm: number;
  elevationGainM: number;
  durationMinutes: number;
  stravaUrl?: string;
  status: RideStatus;
  createdAt: string;
};

export type BadgeRule = 'first_ride' | 'distance_single_ride' | 'elevation_single_ride';

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  rule: BadgeRule;
  requiredValue: number;
};