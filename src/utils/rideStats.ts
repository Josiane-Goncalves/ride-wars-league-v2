import type { Ride, RideStatus } from '../types/ride';

export function getVerifiedRides(rides: Ride[]) {
  return rides.filter((ride) => ride.status === 'verified');
}

export function getTotalDistance(rides: Ride[]) {
  return rides.reduce((total, ride) => total + ride.distanceKm, 0);
}

export function getTotalElevation(rides: Ride[]) {
  return rides.reduce((total, ride) => total + ride.elevationGainM, 0);
}

export function getRidesByStatus(rides: Ride[], status: RideStatus) {
  return rides.filter((ride) => ride.status === status);
}