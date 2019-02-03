import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CityPage from './City';
import EditPage from './Edit';
import Cities from '../../components/Cities';

const CitiesPage = (props) => {
  const { cities, match } = props;

  return (
    <Switch>
      <Route path={`${match.path}/edit`} component={EditPage} />
      <Route path={`${match.path}/:cityId`} component={CityPage} />
      <Route
        path={match.path}
        render={() => (
          <div>
            <Cities cities={cities} />
            <Link to={`${match.path}/edit`}>Edit</Link>
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
