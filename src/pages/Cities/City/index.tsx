import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import City from '../../../components/City';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useWeather } from '../../../hooks';

function CityPage(): JSX.Element {
  const { cityId } = useParams();
  const { data, error, isError, isLoading } = useWeather(parseInt(cityId!, 10));

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>{data.name}</title>
      </Helmet>
      <City {...data} />
    </>
  );
}

export default CityPage;
