import type { RideStatus } from '../types/ride';

export function getRideStatusLabel(status: RideStatus) {
  const statusLabels: Record<RideStatus, string> = {
    unverified: 'Sem comprovação',
    pending: 'Aguardando aprovação',
    verified: 'Aprovado',
    rejected: 'Rejeitado',
  };

  return statusLabels[status];
}

export function getRideStatusClassName(status: RideStatus) {
  return `ride-status ride-status-${status}`;
}