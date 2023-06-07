import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import City from '../../../components/City';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useWeather } from '../../../hooks';

const paramsSchema = z.object({
  cityId: z.coerce.number(),
});

function CityPage(): JSX.Element {
  const params = useParams();
  const { cityId } = paramsSchema.parse(params);
  const { data, error, isError, isLoading } = useWeather(cityId);

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

export { paramsSchema };
export default CityPage;
