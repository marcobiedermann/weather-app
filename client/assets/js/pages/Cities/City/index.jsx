import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ForecastPage from './Forecast';

const CityPage = (props) => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.path}/forecast`} component={ForecastPage} />
      <Route
        path={match.path}
        render={() => (
          <div>
            City Page
          </div>
        )}
      />
    </Switch>
  );
};

CityPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

CityPage.defaultProps = {
  match: null,
};

export default CityPage;
