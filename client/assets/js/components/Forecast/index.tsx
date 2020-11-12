import React, { FC } from 'react';
import Weather, { WeatherProps } from '../Weather';

export interface ForecaseProps {
  list: WeatherProps[];
}

const Forecast: FC<ForecaseProps> = (props) => {
  const { list, ...otherProps } = props;

  return (
    <div {...otherProps}>
      {list && (
        <ul>
          {list.map((weather) => (
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
