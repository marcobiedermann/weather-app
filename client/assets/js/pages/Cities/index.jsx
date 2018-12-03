import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CityPage from './City';
import Cities from '../../components/Cities';

const CitiesPage = (props) => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.path}/:cityId`} component={CityPage} />
      <Route
        path={match.path}
        render={() => (
          <div>
            Cities Page
            <Cities />
          </div>
        )}
      />
    </Switch>
  );
};

CitiesPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

CitiesPage.defaultProps = {
  match: null,
};

export default CitiesPage;
