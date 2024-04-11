import { useSearchParams } from 'react-router-dom';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import Seo from '../../components/Seo';
import { useFind } from '../../hooks';
import { selectSettings } from '../../selectors/settings';
import { useAppSelector } from '../../store';

function SearchPage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const { query } = Object.fromEntries(searchParams);
  const settings = useAppSelector(selectSettings);
  const { data: find, isError, isPending, error } = useFind(query, settings);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Seo title="Search" />
      <Results results={find.list} />
    </>
  );
}

export default SearchPage;
