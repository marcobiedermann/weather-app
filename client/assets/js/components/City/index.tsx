import format from 'date-fns/format';
import React, { FC } from 'react';

interface Weather {
  description: string;
  icon: string;
  id: number;
}

export interface CityProps {
  dt: number;
  main: {
    temp: number;
  };
  name: string;
  weather: Weather[];
}

const City: FC<CityProps> = (props) => {
  const { dt, main, name, weather, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <h1>{name}</h1>
      {format(dt * 1000, 'yyyy-MM-dd hh:mm')}
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

export default City;
