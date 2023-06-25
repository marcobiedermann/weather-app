import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import Cities from '../../components/Cities';
import Error from '../../components/Error';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Seo from '../../components/Seo';
import { useGroup } from '../../hooks';
import { selectCities } from '../../selectors/cities';
import { selectSettings } from '../../selectors/settings';
import { useAppSelector } from '../../store';

function CitiesPage(): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cities = useAppSelector(selectCities);
  const settings = useAppSelector(selectSettings);
  const { t } = useTranslation();
  const { data: group, error, isError, isLoading } = useGroup(cities, settings);

  if (!cities.length) {
    navigate('/search');
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Seo title="Cities" />
      <Cities cities={group.list} />
      <Link to={`${pathname}/edit`}>{t('edit')}</Link>
    </>
  );
}

export default CitiesPage;
