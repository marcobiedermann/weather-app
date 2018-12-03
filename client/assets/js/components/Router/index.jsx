import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CitiesPage from '../../pages/Cities';
import IndexPage from '../../pages/Index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/cities" component={CitiesPage} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
