import { ConnectedRouter } from 'connected-react-router';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from '../../constants/routes';
import CitiesPage from '../../pages/Cities';
import IndexPage from '../../pages/Index';
import SearchPage from '../../pages/Search';
import SettingsPage from '../../pages/Settings';
import { history } from '../../store';
import Layout from '../Layout';

const Router: FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route path={routes.CITIES.path} component={CitiesPage} />
          <Route path={routes.SEARCH.path} component={SearchPage} />
          <Route path={routes.SETTINGS.path} component={SettingsPage} />
          <Route path={routes.INDEX.path} component={IndexPage} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};

export default Router;
