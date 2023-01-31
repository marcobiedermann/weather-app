import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Cities from '../../components/Cities';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { useGroup } from '../../hooks';
import { selectCities } from '../../reducers/cities';

function CitiesPage(): JSX.Element {
  const { pathname } = useLocation();
  const cities = useSelector(selectCities);
  const { t } = useTranslation();
  const { data, error, isError, isLoading } = useGroup(cities);

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
      <Cities cities={data?.list} />
      <Link to={`${pathname}/edit`}>{t('translation:edit')}</Link>
    </>
  );
}

export default CitiesPage;
