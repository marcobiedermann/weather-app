import { format, formatISO, fromUnixTime } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { DAY_OF_WEEK } from '../../utils/date';

interface Temp {
  max: number;
  min: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
}
interface List {
  dt: number;
  temp: Temp;
  weather: Weather[];
}
interface DailyForecastProps {
  list: List[];
}

function DailyForecast(props: DailyForecastProps): JSX.Element {
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
                <time
                  dateTime={formatISO(dateTime, {
                    representation: 'date',
                  })}
                >
                  {format(dateTime, DAY_OF_WEEK)}
                </time>
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
              <td>{t('intlNumberCelsius', { val: day.temp.min })}</td>
              <td>{t('intlNumberCelsius', { val: day.temp.max })}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export type { DailyForecastProps };
export default DailyForecast;
