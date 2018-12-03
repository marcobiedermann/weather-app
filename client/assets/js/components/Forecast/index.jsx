import React from 'react';
import Weather from '../Weather';

const Forecast = (props) => {
  const { list } = props;

  return (
    <div>
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

export default Forecast;
