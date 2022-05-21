import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import City from '../../../components/City';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

interface CityPageQuery {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Clouds {
  all: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
}

function CityPage(): JSX.Element {
  const { cityId } = useParams();
  const { data, error } = useSWR<CityPageQuery>(`/weather?id=${cityId}`);

  if (error) {
    return <Error message={error.message} />;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>{data.name}</title>
      </Helmet>
      <City {...data} />
    </>
  );
}

export default CityPage;
