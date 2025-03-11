import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../components/Layout';

const CitiesPage = lazy(() => import('../pages/Cities'));
const CityPage = lazy(() => import('../pages/Cities/City'));
const CitiesEditPage = lazy(() => import('../pages/Cities/Edit'));
const SearchPage = lazy(() => import('../pages/Search'));
const SettingsPage = lazy(() => import('../pages/Settings'));

const routes = [
  {
    element: <Layout />,
    children: [
      {
        element: <Navigate to="/cities" />,
        path: '/',
      },
      {
        element: <CitiesPage />,
        path: '/cities',
      },
      {
        element: <CitiesEditPage />,
        path: '/cities/edit',
      },
      {
        element: <CityPage />,
        path: '/cities/:cityId',
      },
      {
        element: <SearchPage />,
        path: '/search',
      },
      {
        element: <SettingsPage />,
        path: '/settings',
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
