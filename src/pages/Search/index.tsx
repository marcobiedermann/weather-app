import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import { useFind } from '../../hooks';
import { selectSettings } from '../../selectors/settings';
import { useAppSelector } from '../../store';

function SearchPage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const { query } = Object.fromEntries(searchParams);
  const settings = useAppSelector(selectSettings);
  const { data, isError, isLoading, error } = useFind(query, settings);

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Results results={data.list} />
    </>
  );
}

export default SearchPage;
