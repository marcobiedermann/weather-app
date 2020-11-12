import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Cities from '../../components/Cities';
import CityPage from './City';
import EditPage from './Edit';

const CitiesPage: FC = () => {
  const { path } = useRouteMatch();
  const { t } = useTranslation();

  // const { data } = fetchCities()

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
            <Cities cities={cities} />
            <Link to={`${path}/edit`}>{t('translation:edit')}</Link>
          </div>
        )}
      />
    </Switch>
  );
};

export default CitiesPage;
