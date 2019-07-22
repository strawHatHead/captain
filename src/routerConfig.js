import React from 'react';

import BasicLayout from '@/layouts/BasicLayout';

const Base = React.lazy(() =>import('@/pages/Base'));
const Network = React.lazy(() =>import('@/pages/Network'));
const NotFound = React.lazy(() =>import('@/pages/NotFound'));

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/base',
        component: Base,
      },
      {
        path: '/network',
        component:  Network,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
