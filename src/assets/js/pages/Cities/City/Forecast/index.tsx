import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../../components/Error';
import Forecast from '../../../../components/Forecast';
import Loader from '../../../../components/Loader';

interface Params {
  cityId: string;
}

interface ForecastPageQuery {
  city: City;
  cnt: number;
  cod: string;
  list: List[];
  message: number;
}

interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  timezone: number;
}

interface Coord {
  lat: number;
  lon: number;
}

interface List {
  clouds: number;
  deg: number;
  dt: number;
  feels_like: FeelsLike;
  humidity: number;
  pop: number;
  pressure: number;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  weather: Weather[];
}

interface FeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

interface Temp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

const ForecastPage: FC = () => {
  const { cityId } = useParams<Params>();
  const { data, error } = useSWR<ForecastPageQuery>(`/forecast/daily?id=${cityId}`);

  if (error) {
    return <Error message={error.message} />;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Daily Forecast</title>
      </Helmet>
      <Forecast list={data.list} />
    </>
  );
};

export default ForecastPage;
