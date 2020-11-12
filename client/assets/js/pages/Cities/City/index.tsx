import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Weather from '../../../components/Weather';
import ForecastPage from './Forecast';

interface Params {
  cityId: string;
}

const CityPage: FC = () => {
  const { cityId } = useParams<Params>();
  const { path } = useRouteMatch();

  // const { data } = fetchWeatherById(cityId);

  return (
    <Switch>
      <Route path={`${path}/forecast`} component={ForecastPage} />
      <Route
        path={path}
        render={() => (
          <div>
            <Helmet>
              <title>{weather.name}</title>
            </Helmet>
            <Weather {...weather} />
          </div>
        )}
      />
    </Switch>
  );
};

export default CityPage;
