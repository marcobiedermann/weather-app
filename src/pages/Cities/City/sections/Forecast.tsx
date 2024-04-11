import { fromUnixTime, isSameDay } from 'date-fns';
import Error from '../../../../components/Error';
import Forecast from '../../../../components/Forecast';
import Loader from '../../../../components/Loader';
import type { SupportedLanguage, SupportedUnit } from '../../../../constants/localization';
import { useForecast } from '../../../../hooks';

interface ForecastSectionProps {
  cityId: number;
  settings: {
    language: SupportedLanguage;
    unit: SupportedUnit;
  };
}

function ForecastSection(props: ForecastSectionProps) {
  const { cityId, settings } = props;
  const { data: forecast, error, isError, isPending } = useForecast(cityId, settings);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.message} />;
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
