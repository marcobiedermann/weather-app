import { format, fromUnixTime } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import City from '../../../components/City';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import Seo from '../../../components/Seo';
import { useWeather } from '../../../hooks';
import { selectSettings } from '../../../selectors/settings';
import { useAppSelector } from '../../../store';
import { LONG_LOCALIZED_TIME } from '../../../utils/date';
import DailyForecastSection from './sections/DailyForecast';
import ForecastSection from './sections/Forecast';

const itemStyles = {
  aspectRatio: 1,
  backgroundColor: '#fcfcfc',
  padding: '1.5em',
  borderRadius: '0.25em',
};

const paramsSchema = z.object({
  cityId: z.coerce.number(),
});

function CityPage(): JSX.Element {
  const params = useParams();
  const { cityId } = paramsSchema.parse(params);
  const settings = useAppSelector(selectSettings);
  const { t } = useTranslation();
  const { data: weather, error, isError, isPending } = useWeather(cityId, settings);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Seo title={weather.name} />
      <section>
        <City {...weather} />
      </section>
      <ForecastSection cityId={cityId} settings={settings} />
      <DailyForecastSection cityId={cityId} settings={settings} />
      <ul
        style={{
          display: 'grid',
          gap: '1.5em',
          gridTemplateColumns: 'repeat(4, 1fr)',
          listStyle: 'none',
          marginBlock: '0.5em 1.5em',
          padding: 0,
        }}
      >
        <li style={itemStyles}>
          <h4>{t('sunset')}</h4>
          {format(fromUnixTime(weather.sys.sunset), LONG_LOCALIZED_TIME)}
          <br />
          <h5>{t('sunrise')}</h5>
          {format(fromUnixTime(weather.sys.sunrise), LONG_LOCALIZED_TIME)}
        </li>
        <li style={itemStyles}>
          <h4>{t('wind')}</h4>
          {t('intlNumberKmh', { val: weather.wind.speed })}
        </li>
        <li style={itemStyles}>
          <h4>{t('feelsLike')}</h4>
          {t('intlNumberCelsius', { val: weather.main.feels_like })}
        </li>
        <li style={itemStyles}>
          <h4>{t('humidity')}</h4>
          {t('intlNumberPercent', { val: weather.main.humidity / 100 })}
        </li>
        <li style={itemStyles}>
          <h4>{t('visibility')}</h4>
          {t('intlNumberKilometer', { val: weather.visibility / 1000 })}
        </li>
        <li style={itemStyles}>
          <h4>{t('pressure')}</h4>
          {t('intlNumberHectoPascal', { val: weather.main.pressure })}
        </li>
      </ul>
    </>
  );
}

export default CityPage;
