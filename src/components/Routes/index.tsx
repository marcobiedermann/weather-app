import React from 'react';
import { useRoutes } from 'react-router-dom';
import CitiesPage from '../../pages/Cities';
import CityPage from '../../pages/Cities/City';
import CityForecastPage from '../../pages/Cities/City/Forecast';
import CitiesEditPage from '../../pages/Cities/Edit';
import HomePage from '../../pages/Index';
import SearchPage from '../../pages/Search';
import SettingsPage from '../../pages/Settings';

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
    element: <CityForecastPage />,
    path: '/cities/:cityId/forecast',
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

const Routes = () => {
  const element = useRoutes(routes);

  return element;
};

export default Routes;
