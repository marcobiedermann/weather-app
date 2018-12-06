import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CitiesPage from '../../pages/Cities';
import IndexPage from '../../pages/Index';
import SettingsPage from '../../pages/Settings';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/cities" component={CitiesPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
