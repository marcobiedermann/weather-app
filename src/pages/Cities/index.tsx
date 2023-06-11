import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cities from '../../components/Cities';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { useGroup } from '../../hooks';
import { selectCities } from '../../selectors/cities';
import { useAppSelector } from '../../store';
import { selectSettings } from '../../selectors/settings';

function CitiesPage(): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cities = useAppSelector(selectCities);
  const settings = useAppSelector(selectSettings);
  const { t } = useTranslation();
  const { data, error, isError, isLoading } = useGroup(cities, settings);

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
      <Helmet>
        <title>Cities</title>
      </Helmet>
      <Cities cities={data.list} />
      <Link to={`${pathname}/edit`}>{t('translation:edit')}</Link>
    </>
  );
}

export default CitiesPage;
