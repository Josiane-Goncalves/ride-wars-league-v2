import type { Badge } from '../types/ride';

export const mockBadges: Badge[] = [
  {
    id: 'badge-1',
    name: 'Primeiro Pedal',
    description: 'Registrou o primeiro pedal na liga.',
    icon: '🚴‍♀️',
    requiredDistanceKm: 1,
  },
  {
    id: 'badge-2',
    name: 'Guerreira dos 30K',
    description: 'Completou um pedal de pelo menos 30 km.',
    icon: '⚔️',
    requiredDistanceKm: 30,
  },
  {
    id: 'badge-3',
    name: 'Lenda da Subida',
    description: 'Encarou um pedal com bastante altimetria.',
    icon: '⛰️',
    requiredDistanceKm: 40,
  },
];