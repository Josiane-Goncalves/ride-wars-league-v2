import type { Ride } from '../../types/ride';
import { formatDuration } from '../../utils/formatDuration';
import {
  getRideStatusClassName,
  getRideStatusLabel,
} from '../../utils/rideStatus';

type RideCardProps = {
  ride: Ride;
};

export function RideCard({ ride }: RideCardProps) {
  return (
    <article className="submitted-ride-card">
      <div>
        <strong>{ride.title}</strong>

        <span>
          {ride.distanceKm} km • {ride.elevationGainM} m •{' '}
          {formatDuration(ride.durationMinutes)}
        </span>
      </div>

      <span className={getRideStatusClassName(ride.status)}>
        {getRideStatusLabel(ride.status)}
      </span>
    </article>
  );
}