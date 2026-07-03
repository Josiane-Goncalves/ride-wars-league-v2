import type { ReactNode } from 'react';
import type { Ride } from '../../types/ride';
import { formatDuration } from '../../utils/formatDuration';
import {
  getRideStatusClassName,
  getRideStatusLabel,
} from '../../utils/rideStatus';

type RideCardProps = {
  ride: Ride;
  children?: ReactNode;
};

export function RideCard({ ride, children }: RideCardProps) {
  return (
    <article className="submitted-ride-card">
      <div>
        <strong>{ride.title}</strong>

        <span>
          {ride.distanceKm} km • {ride.elevationGainM} m •{' '}
          {formatDuration(ride.durationMinutes)}
        </span>
      </div>

      <div className="ride-card-side">
        <span className={getRideStatusClassName(ride.status)}>
          {getRideStatusLabel(ride.status)}
        </span>

        {children && <div className="ride-card-actions">{children}</div>}
      </div>
    </article>
  );
}