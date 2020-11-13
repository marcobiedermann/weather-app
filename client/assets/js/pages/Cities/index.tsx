import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useSWR from 'swr';
import Cities from '../../components/Cities';
import Loader from '../../components/Loader';
import CityPage from './City';
import EditPage from './Edit';

interface CitiesPageQuery {
  cnt: number;
  list: List[];
}

interface List {
  coord: Coord;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
}

interface Clouds {
  all: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
}

const CitiesPage: FC = () => {
  const { path } = useRouteMatch();
  const { t } = useTranslation();
  const { data, error } = useSWR<CitiesPageQuery>('/group?id=524901,703448,2643743');

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <Loader />;
  }

  console.log({ data });

  return (
    <Switch>
      <Route path={`${path}/edit`} component={EditPage} />
      <Route path={`${path}/:cityId`} component={CityPage} />
      <Route
        path={path}
        render={() => (
          <div>
            <Helmet>
              <title>Cities</title>
            </Helmet>
            <Cities cities={data.list} />
            <Link to={`${path}/edit`}>{t('translation:edit')}</Link>
          </div>
        )}
      />
    </Switch>
  );
};

export default CitiesPage;
