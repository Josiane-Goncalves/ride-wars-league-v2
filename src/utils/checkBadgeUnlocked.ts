import type { Badge, Ride } from '../types/ride';

export function checkBadgeUnlocked(badge: Badge, rides: Ride[]) {
  const verifiedRides = rides.filter((ride) => ride.status === 'verified');

  if (badge.rule === 'first_ride') {
    return verifiedRides.length >= badge.requiredValue;
  }

  if (badge.rule === 'distance_single_ride') {
    return verifiedRides.some(
      (ride) => ride.distanceKm >= badge.requiredValue,
    );
  }

  if (badge.rule === 'elevation_single_ride') {
    return verifiedRides.some(
      (ride) => ride.elevationGainM >= badge.requiredValue,
    );
  }

  return false;
}