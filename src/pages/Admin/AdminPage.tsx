import { useState } from 'react';
import { RideCard } from '../../components/rides/RideCard';
import { mockRides } from '../../data/mockRides';
import type { Ride, RideStatus } from '../../types/ride';

export function AdminPage() {
  const [rides, setRides] = useState<Ride[]>(mockRides);

  const pendingRides = rides.filter((ride) => ride.status === 'pending');
  const reviewedRides = rides.filter(
    (ride) => ride.status === 'verified' || ride.status === 'rejected',
  );

  function updateRideStatus(rideId: string, status: RideStatus) {
    setRides((currentRides) =>
      currentRides.map((ride) => {
        if (ride.id === rideId) {
          return {
            ...ride,
            status,
          };
        }

        return ride;
      }),
    );
  }

  return (
    <section className="page-card">
      <span className="pixel-badge">Admin</span>

      <h1>Painel Admin</h1>

      <p>
        Aprove ou rejeite pedais enviados com comprovante. Nesta versão, as
        alterações acontecem apenas na tela.
      </p>

      <div className="admin-section">
        <h2>Pedais aguardando aprovação</h2>

        {pendingRides.length === 0 && (
          <p className="empty-state">Nenhum pedal aguardando aprovação.</p>
        )}

        <div className="admin-rides-list">
          {pendingRides.map((ride) => (
            <RideCard ride={ride} key={ride.id}>
              <button
                type="button"
                className="admin-approve-button"
                onClick={() => updateRideStatus(ride.id, 'verified')}
              >
                Aprovar
              </button>

              <button
                type="button"
                className="admin-reject-button"
                onClick={() => updateRideStatus(ride.id, 'rejected')}
              >
                Rejeitar
              </button>
            </RideCard>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <h2>Pedais já avaliados</h2>

        {reviewedRides.length === 0 && (
          <p className="empty-state">Nenhum pedal avaliado ainda.</p>
        )}

        <div className="admin-rides-list">
          {reviewedRides.map((ride) => (
            <RideCard ride={ride} key={ride.id} />
          ))}
        </div>
      </div>
    </section>
  );
}