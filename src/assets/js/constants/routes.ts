import { RouteComponentProps } from 'react-router-dom';
import CitiesPage from '../pages/Cities';
import CityPage from '../pages/Cities/City';
import ForecastPage from '../pages/Cities/City/Forecast';
import EditPage from '../pages/Cities/Edit';
import HomePage from '../pages/Index';
import SearchPage from '../pages/Search';
import SettingsPage from '../pages/Settings';

interface Route {
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact?: boolean;
  name: string;
  path: string;
  routes?: Route[];
}

export const INDEX = {
  component: HomePage,
  exact: true,
  name: 'Home',
  path: '/',
};

export const FORECAST = {
  component: ForecastPage,
  name: 'Forecast',
  path: '/forecast',
};

export const CITY = {
  component: CityPage,
  name: 'City',
  path: '/:cityId',
  routes: [FORECAST],
};

export const EDIT = {
  component: EditPage,
  name: 'Edit',
  path: '/edit',
};

export const CITIES = {
  component: CitiesPage,
  name: 'Cities',
  path: '/cities',
  routes: [CITY, EDIT],
};

export const SEARCH = {
  component: SearchPage,
  name: 'Search',
  path: '/search',
};

export const SETTINGS = {
  component: SettingsPage,
  name: 'Settings',
  path: '/settings',
};

const routes: Route[] = [INDEX, CITIES, SEARCH, SETTINGS];

export default routes;
