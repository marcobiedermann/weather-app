import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React from 'react';

const Weather = props => {
  const { dt, main, name, weather, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <h1>{name}</h1>
      {format(dt * 1000, 'YYYY-MM-DD hh:mm')}
      <div>Temp: {main.temp}</div>
      {weather && (
        <ul>
          {weather.map(weather => (
            <li key={weather.id}>
              {weather.description}
              <img
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
                alt={weather.description}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Weather.propTypes = {
  dt: PropTypes.number,
  main: PropTypes.shape({
    temp: PropTypes.number,
  }),
  name: PropTypes.string,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
    }),
  ),
};

Weather.defaultProps = {
  dt: 0,
  main: {
    temp: 0,
  },
  name: '',
  weather: [],
};

export default Weather;
