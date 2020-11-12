import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

interface Params {
  cityId: string;
}

const ForecastPage: FC = () => {
  const { cityId } = useParams<Params>();

  // const { data } = fetchForecastById(cityId);

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
};

export default ForecastPage;
