import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import CitiesPage from '../../pages/Cities';
import IndexPage from '../../pages/Index';
import SettingsPage from '../../pages/Settings';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/cities" component={CitiesPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
