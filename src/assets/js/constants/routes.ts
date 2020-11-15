import { lazy } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Route {
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact?: boolean;
  name: string;
  path: string;
  routes?: Route[];
}

export const INDEX = {
  component: lazy(() => import('../pages/Index')),
  exact: true,
  name: 'Home',
  path: '/',
};

export const FORECAST = {
  component: lazy(() => import('../pages/Cities/City/Forecast')),
  name: 'Forecast',
  path: '/forecast',
};

export const CITY = {
  component: lazy(() => import('../pages/Cities/City')),
  name: 'City',
  path: '/:cityId',
  routes: [FORECAST],
};

export const EDIT = {
  component: lazy(() => import('../pages/Cities/Edit')),
  name: 'Edit',
  path: '/edit',
};

export const CITIES = {
  component: lazy(() => import('../pages/Cities')),
  name: 'Cities',
  path: '/cities',
  routes: [CITY, EDIT],
};

export const SEARCH = {
  component: lazy(() => import('../pages/Search')),
  name: 'Search',
  path: '/search',
};

export const SETTINGS = {
  component: lazy(() => import('../pages/Settings')),
  name: 'Settings',
  path: '/settings',
};

const routes: Route[] = [INDEX, CITIES, SEARCH, SETTINGS];

export default routes;
