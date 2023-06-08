import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import Search, { FormData } from '../../components/Search';
import { useFind } from '../../hooks';

function SearchPage(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const { data, isError, error } = useFind(query);

  if (isError) {
    return <Error message={error.message} />;
  }

  const defaultValues: FormData = {
    query,
  };

  function onSubmit(data: FormData): void {
    const { query } = data;

    setQuery(query);
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
