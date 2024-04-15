import { useNavigate, useSearchParams } from 'react-router-dom';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Results from '../../components/Results';
import Seo from '../../components/Seo';
import { useFind } from '../../hooks';
import { addCity } from '../../reducers/cities';
import { selectSettings } from '../../selectors/settings';
import { useAppDispatch, useAppSelector } from '../../store';

function SearchPage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const settings = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();
  const { query } = Object.fromEntries(searchParams);
  const { data: find, isError, isPending, error } = useFind(query, settings);

  function onResultClick(id: number) {
    dispatch(addCity(id));

    navigate('/cities');
  }

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Seo title="Search" />
      <Results onResultClick={onResultClick} results={find.list} />
    </>
  );
}

export default SearchPage;
