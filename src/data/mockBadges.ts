import type { Badge } from '../types/ride';

export const mockBadges: Badge[] = [
  {
    id: 'badge-1',
    name: 'Primeiro Pedal',
    description: 'Registrou o primeiro pedal verificado na liga.',
    icon: '🚴‍♀️',
    rule: 'first_ride',
    requiredValue: 1,
  },
  {
    id: 'badge-2',
    name: 'Guerreira dos 30K',
    description: 'Completou um pedal verificado de pelo menos 30 km.',
    icon: '⚔️',
    rule: 'distance_single_ride',
    requiredValue: 30,
  },
  {
    id: 'badge-3',
    name: 'Lenda da Subida',
    description: 'Completou um pedal verificado com pelo menos 600 m de elevação.',
    icon: '⛰️',
    rule: 'elevation_single_ride',
    requiredValue: 600,
  },
];