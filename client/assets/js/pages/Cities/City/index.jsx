import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import ForecastPage from './Forecast';
import { fetchWeatherById } from '../../../actions/weather';
import Weather from '../../../components/Weather';

class CityPage extends Component {
  componentDidMount() {
    const { fetchWeatherById, match } = this.props;

    fetchWeatherById(match.params.cityId);
  }

  render() {
    const { match, weather } = this.props;

    return (
      <Switch>
        <Route path={`${match.path}/forecast`} component={ForecastPage} />
        <Route
          path={match.path}
          render={() => (
            <div>
              <Weather {...weather} />
            </div>
          )}
        />
      </Switch>
    );
  }
}

CityPage.propTypes = {
  fetchWeatherById: PropTypes.func,
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
  weather: PropTypes.shape(),
};

CityPage.defaultProps = {
  fetchWeatherById: () => {},
  match: null,
  weather: null,
};

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchWeatherById,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CityPage);
