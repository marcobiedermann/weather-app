import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Error from '../../../../components/Error';
import Forecast from '../../../../components/Forecast';
import Loader from '../../../../components/Loader';
import { useDailyForeCast } from '../../../../hooks';

function ForecastPage(): JSX.Element {
  const { cityId } = useParams();
  const { data, error, isError, isLoading } = useDailyForeCast(parseInt(cityId!, 10));

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Daily Forecast</title>
      </Helmet>
      <Forecast list={data?.list} />
    </>
  );
}

export default ForecastPage;
