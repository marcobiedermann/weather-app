import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import Search, { FormData } from '../../components/Search';
import { useFind } from '../../hooks';
import { selectSettings } from '../../selectors/settings';
import { useAppSelector } from '../../store';

function SearchPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const { query: defaultQuery } = Object.fromEntries(searchParams);
  const [query, setQuery] = useState<string>(defaultQuery);
  const settings = useAppSelector(selectSettings);
  const { data, isError, error } = useFind(query, settings);

  if (isError) {
    return <Error message={error.message} />;
  }

  const defaultValues: FormData = {
    query,
  };

  function onSubmit(data: FormData): void {
    const { query } = data;

    setQuery(query);
    setSearchParams({ query });
  }

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Search defaultValues={defaultValues} onSubmit={onSubmit} />
      {query && (data ? <Results results={data.list} /> : <Loader />)}
    </>
  );
}

export default SearchPage;
