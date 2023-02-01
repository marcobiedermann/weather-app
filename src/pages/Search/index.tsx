import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import useSWR from 'swr';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import Search, { FormData } from '../../components/Search';

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

function SearchPage(): JSX.Element {
  const [query, setQuery] = useState('London, GB');
  const { data, error } = useSWR<SearchPageQuery>(`/find?q=${query}`);

  if (error) {
    return <Error message={error.message} />;
  }

  const defaultValues: FormData = {
    query,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: FormData): void | Promise<any> {
    const { query } = data;

    setQuery(query);
  }

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Search defaultValues={defaultValues} onSubmit={onSubmit} />
      {data ? <Results results={data.list} /> : <Loader />}
    </>
  );
}

export default SearchPage;
