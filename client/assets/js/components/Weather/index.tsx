import format from 'date-fns/format';
import React, { FC } from 'react';

interface Weather {
  description: string;
  icon: string;
  id: number;
}

export interface WeatherProps {
  dt: number;
  main: {
    temp: number;
  };
  name: string;
  weather: Weather[];
}

const Weather: FC<WeatherProps> = (props) => {
  const { dt, main, name, weather, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <h1>{name}</h1>
      {format(dt * 1000, 'YYYY-MM-DD hh:mm')}
      <div>Temp: {main.temp}</div>
      {weather && (
        <ul>
          {weather.map((weather) => (
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

export default Weather;