import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import Search, { FormData } from '../../components/Search';
import { useFind } from '../../hooks';

function SearchPage(): JSX.Element {
  const [query, setQuery] = useState('London, GB');
  const { data, isError, error } = useFind(query);

  if (isError) {
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
