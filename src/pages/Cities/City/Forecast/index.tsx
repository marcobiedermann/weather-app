import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Error from '../../../../components/Error';
import Forecast from '../../../../components/Forecast';
import Loader from '../../../../components/Loader';
import { useDailyForeCast } from '../../../../hooks';
import { paramsSchema } from '..';

function ForecastPage(): JSX.Element {
  const params = useParams();
  const { cityId } = paramsSchema.parse(params);
  const { data, error, isError, isLoading } = useDailyForeCast(cityId);

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
