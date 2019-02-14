import PropTypes from 'prop-types';
import React from 'react';
import Weather from '../Weather';

const Forecast = props => {
  const { list, ...otherProps } = props;

  return (
    <div {...otherProps}>
      {list && (
        <ul>
          {list.map(weather => (
            <li key={weather.dt}>
              <Weather {...weather} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Forecast.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()),
};

Forecast.defaultProps = {
  list: [],
};

export default Forecast;
