/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const THEME = {
  colors: {
    primary: '#E10600', // F1 Red
    secondary: '#15151E', // F1 Navy/Dark
    background: '#FFFFFF',
    text: '#15151E',
    accent: '#38383F', // Dark gray
  },
  fonts: {
    display: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
    mono: '"JetBrains Mono", monospace',
  }
};

export const PORTALS = [
  {
    id: 'user',
    name: 'Student Portal',
    description: 'Browse the collection, check availability, and manage your loans.',
    path: '/portal/user',
    icon: 'BookOpen',
    color: 'blue'
  },
  {
    id: 'employee',
    name: 'Employee Portal',
    description: 'Add books, update details, and manage the catalog.',
    path: '/portal/employee',
    icon: 'Settings',
    color: 'red'
  },
  {
    id: 'admin',
    name: 'Admin Portal',
    description: 'System-wide configuration, user management, and analytics.',
    path: '/portal/admin',
    icon: 'ShieldCheck',
    color: 'dark'
  }
];
