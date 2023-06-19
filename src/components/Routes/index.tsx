import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Index'));
const CitiesPage = lazy(() => import('../../pages/Cities'));
const CityPage = lazy(() => import('../../pages/Cities/City'));
const CitiesEditPage = lazy(() => import('../../pages/Cities/Edit'));
const SearchPage = lazy(() => import('../../pages/Search'));
const SettingsPage = lazy(() => import('../../pages/Settings'));

const routes = [
  {
    element: <HomePage />,
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
];

function Routes(): JSX.Element {
  const element = useRoutes(routes);

  return element!;
}

export default Routes;
