import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchForecastById } from '../../../../actions/forecast';

class ForecastPage extends Component {
  componentDidMount() {
    const { fetchForecastById, match } = this.props;

    fetchForecastById(match.params.cityId);
  }

  render() {
    const { forecast } = this.props;

    return (
      <div>
        <Helmet>
          <title>Forecast</title>
        </Helmet>
        <ul>
          {forecast.list.map((item) => (
            <li key={item.dt}>
              <div>Min: {item.temp.min}</div>
              <div>Max: {item.temp.max}</div>
              <div>
                {item.weather[0].description}
                <img
                  src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ForecastPage.propTypes = {
  forecast: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.number,
        temp: PropTypes.shape({
          min: PropTypes.number,
          max: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
          }),
        ),
      }),
    ),
  }),
  fetchForecastById: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      cityId: PropTypes.string,
    }),
    path: PropTypes.string,
  }),
};

ForecastPage.defaultProps = {
  forecast: null,
  fetchForecastById: () => {},
  match: null,
};

const mapStateToProps = (state) => ({
  forecast: state.forecast,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchForecastById,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
