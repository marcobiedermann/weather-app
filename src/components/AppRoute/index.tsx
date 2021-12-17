import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

export interface AppRouteProps {
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact?: boolean;
  name: string;
  path: string;
  routes?: AppRouteProps[];
}

const AppRoute: FC<AppRouteProps> = (props) => {
  const { path, routes = [], ...otherProps } = props;

  return (
    <Switch>
      {routes.map((route) => (
        <AppRoute {...route} key={route.path} path={`${path}${route.path}`} />
      ))}
      <Route path={path} {...otherProps} />
    </Switch>
  );
};

export default AppRoute;
