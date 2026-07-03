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

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  requiredDistanceKm: number;
};