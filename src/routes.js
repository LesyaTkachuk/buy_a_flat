import { lazy } from 'react';

export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    showInMenu: false,
    component: lazy(() =>
      import('./pages/Home' /* webpackChunkName: "home-page" */),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'Planning',
    path: '/planning',
    exact: true,
    showInMenu: 'Персональный план',
    component: lazy(() =>
      import('./pages/Planning' /* webpackChunkName: "planning-page" */),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'Expenses',
    path: '/expenses',
    exact: true,
    showInMenu: 'Расходы',
    component: lazy(() =>
      import('./pages/Expenses' /* webpackChunkName: "expenses-page" */),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'Dynamics',
    path: '/dynamics',
    showInMenu: 'Динамика',
    exact: true,
    component: lazy(() =>
      import('./pages/Dynamics' /* webpackChunkName: "dynamics-page" */),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'Navigation',
    path: '/navigation',
    showInMenu: false,
    exact: true,
    component: lazy(() =>
      import('./pages/Navigation' /* webpackChunkName: "navigation-page" */),
    ),
    private: true,
    restricted: false,
  },
];
