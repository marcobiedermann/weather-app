import { format, formatISO, fromUnixTime } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { HOUR } from '../../utils/date';

interface Main {
  temp: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
}
interface List {
  dt: number;
  main: Main;
  weather: Weather[];
}
interface ForecastProps {
  list: List[];
}

function Forecast(props: ForecastProps): JSX.Element {
  const { list } = props;
  const { t } = useTranslation();

  return (
    <table>
      <tbody>
        {list.map((day) => {
          const dateTime = fromUnixTime(day.dt);

          return (
            <tr key={day.dt}>
              <td>
                <time dateTime={formatISO(dateTime)}>{format(dateTime, HOUR)}</time>
              </td>
              <td>
                {day.weather.map((entry) => (
                  <img
                    src={`https://openweathermap.org/img/wn/${entry.icon}.png`}
                    alt={entry.description}
                    key={entry.id}
                  />
                ))}
              </td>
              <td>{t('intlNumberCelsius', { val: day.main.temp })}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export type { ForecastProps };
export default Forecast;
