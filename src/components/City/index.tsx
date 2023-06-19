import { useTranslation } from 'react-i18next';

interface Weather {
  description: string;
  icon: string;
  id: number;
}

interface CityProps {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  weather: Weather[];
}

function City(props: CityProps): JSX.Element {
  const { main, name, weather, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <div {...otherProps}>
      <h1>{name}</h1>
      <p>{weather.map((entry) => entry.description).join(', ')}</p>
      <div>
        H: {t('intlNumberCelsius', { val: main.temp_max })} L:{' '}
        {t('intlNumberCelsius', { val: main.temp_min })}
      </div>
    </div>
  );
}

export type { CityProps };
export default City;
