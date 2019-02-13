import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import * as routes from '../../constants/routes';
import CitiesPage from '../../pages/Cities';
import IndexPage from '../../pages/Index';
import SearchPage from '../../pages/Search';
import SettingsPage from '../../pages/Settings';
import { history } from '../../store';


const Router = (props) => {
  const { ...otherProps } = props;

  return (
    <ConnectedRouter history={history} {...otherProps}>
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
