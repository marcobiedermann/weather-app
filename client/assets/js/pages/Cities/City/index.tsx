import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import useSWR from 'swr';
import Loader from '../../../components/Loader';
import Weather from '../../../components/Weather';
import ForecastPage from './Forecast';

interface Params {
  cityId: string;
}

interface CityPageQuery {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
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
  type: number;
  id: number;
  country: string;
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

const CityPage: FC = () => {
  const { cityId } = useParams<Params>();
  const { path } = useRouteMatch();
  const { data, error } = useSWR<CityPageQuery>(`/weather?id=${cityId}`);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <Switch>
      <Route path={`${path}/forecast`} component={ForecastPage} />
      <Route
        path={path}
        render={() => (
          <div>
            <Helmet>
              <title>{data.name}</title>
            </Helmet>
            <Weather {...data} />
          </div>
        )}
      />
    </Switch>
  );
};

export default CityPage;
