import { ServerStatus } from '../types';

export const serverStatus: ServerStatus[] = [
  {
    id: 's1',
    name: 'US East (New York)',
    location: 'New York, USA',
    status: 'operational',
    uptime: 99.998,
    lastChecked: '1 min ago',
  },
  {
    id: 's2',
    name: 'US West (San Francisco)',
    location: 'San Francisco, USA',
    status: 'operational',
    uptime: 99.995,
    lastChecked: '1 min ago',
  },
  {
    id: 's3',
    name: 'Europe (London)',
    location: 'London, UK',
    status: 'operational',
    uptime: 99.992,
    lastChecked: '1 min ago',
  },
  {
    id: 's4',
    name: 'Asia Pacific (Singapore)',
    location: 'Singapore',
    status: 'maintenance',
    uptime: 99.987,
    lastChecked: '1 min ago',
  },
  {
    id: 's5',
    name: 'Asia Pacific (Tokyo)',
    location: 'Tokyo, Japan',
    status: 'operational',
    uptime: 99.994,
    lastChecked: '1 min ago',
  },
];