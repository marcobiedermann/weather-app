import { FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import useSWR from 'swr';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import Search from '../../components/Search';

interface SearchPageQuery {
  message: string;
  cod: string;
  count: number;
  list: List[];
}

interface List {
  id: number;
  name: string;
  coord: Coord;
  main: Main;
  dt: number;
  wind: Wind;
  sys: Sys;
  rain: null;
  snow: null;
  clouds: Clouds;
  weather: Weather[];
}

interface Clouds {
  all: number;
}

interface Coord {
  lat: number;
  lon: number;
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
  country: string;
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

interface Values {
  query: string;
}

const SearchPage: FC = () => {
  const [query, setQuery] = useState('London, GB');
  const { data, error } = useSWR<SearchPageQuery>(`/find?q=${query}`);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const initialValues: Values = {
    query,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> {
    const { setSubmitting } = formikHelpers;

    setQuery(values.query);
    setSubmitting(false);
  }

  return (
    <div>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Search initialValues={initialValues} onSubmit={onSubmit} />
      {data ? <Results results={data.list} /> : <Loader />}
    </div>
  );
};

export default SearchPage;
