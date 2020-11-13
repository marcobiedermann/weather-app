import { FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import useSWR from 'swr';
import Loader from '../../components/Loader';
import Result from '../../components/Result';
import Search from '../../components/Search';

interface SearchPageQuery {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

interface Clouds {
  all: number;
}

interface Coord {
  lat: number;
  lon: number;
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp_max: number;
  temp_min: number;
  temp: number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Wind {
  deg: number;
  speed: number;
}

interface Values {
  query: string;
}

const SearchPage: FC = () => {
  const [query, setQuery] = useState('London');
  const { data, error } = useSWR<SearchPageQuery>(`/weather?q=${query}`);

  if (error) {
    return <div>Error: {error}</div>;
  }

  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> {
    const { setSubmitting } = formikHelpers;
    const { query } = values;

    setQuery(query);
    setSubmitting(false);
  }

  return (
    <div>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Search onSubmit={onSubmit} />
      {data ? <Result {...data} /> : <Loader />}
    </div>
  );
};

export default SearchPage;
