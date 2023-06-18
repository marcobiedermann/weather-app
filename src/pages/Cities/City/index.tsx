import { Helmet } from 'react-helmet';
import { Link, useLocation, useParams } from 'react-router-dom';
import { z } from 'zod';
import City from '../../../components/City';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useWeather } from '../../../hooks';
import { selectSettings } from '../../../selectors/settings';
import { useAppSelector } from '../../../store';

const paramsSchema = z.object({
  cityId: z.coerce.number(),
});

function CityPage(): JSX.Element {
  const params = useParams();
  const { pathname } = useLocation();
  const { cityId } = paramsSchema.parse(params);
  const settings = useAppSelector(selectSettings);
  const { data, error, isError, isLoading } = useWeather(cityId, settings);

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
      <p>
        <Link to={`${pathname}/forecast`}>Forecast</Link>
      </p>
    </>
  );
}

export { paramsSchema };
export default CityPage;
