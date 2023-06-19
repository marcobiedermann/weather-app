import { fromUnixTime, isSameDay } from 'date-fns';
import Error from '../../../../components/Error';
import Forecast from '../../../../components/Forecast';
import Loader from '../../../../components/Loader';
import { useForecast } from '../../../../hooks';

interface ForecastSectionProps {
  cityId: number;
  settings: any;
}

function ForecastSection(props: ForecastSectionProps) {
  const { cityId, settings } = props;
  const { data: forecast, error, isError, isLoading } = useForecast(cityId, settings);

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  const now = new Date();

  return (
    <section>
      <Forecast list={forecast.list.filter((day) => isSameDay(now, fromUnixTime(day.dt)))} />
    </section>
  );
}

export type { ForecastSectionProps };
export default ForecastSection;
