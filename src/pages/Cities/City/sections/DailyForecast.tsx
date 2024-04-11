import DailyForecast from '../../../../components/DailyForecast';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import { useDailyForecast } from '../../../../hooks';

interface DailyForecastSectionProps {
  cityId: number;
  settings: any;
}

function DailyForecastSection(props: DailyForecastSectionProps) {
  const { cityId, settings } = props;
  const { data: dailyForecast, error, isError, isPending } = useDailyForecast(cityId, settings);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <section>
      <h3>10-Day Forecast</h3>
      <DailyForecast list={dailyForecast.list.slice(0, 10)} />
    </section>
  );
}

export type { DailyForecastSectionProps };
export default DailyForecastSection;
