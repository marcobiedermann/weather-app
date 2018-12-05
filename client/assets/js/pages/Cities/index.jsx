import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CityPage from './City';
import Cities from '../../components/Cities';

const CitiesPage = (props) => {
  const { cities, match } = props;

  return (
    <Switch>
      <Route path={`${match.path}/:cityId`} component={CityPage} />
      <Route
        path={match.path}
        render={() => (
          <div>
            Cities Page
            <Cities cities={cities} />
          </div>
        )}
      />
    </Switch>
  );
};

CitiesPage.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

CitiesPage.defaultProps = {
  cities: [],
  match: null,
};

const mapStateToProps = ({ cities }) => ({
  cities,
});

export default connect(mapStateToProps)(CitiesPage);
