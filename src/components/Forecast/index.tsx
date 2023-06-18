import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';

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
interface ForecastProps {
  list: List[];
}

function Forecast(props: ForecastProps): JSX.Element {
  const { list } = props;

  return (
    <table>
      <tbody>
        {list.map((day) => (
          <tr key={day.dt}>
            <td>
              <time dateTime={format(fromUnixTime(day.dt), 'yyyy-MM-dd')}>
                {format(fromUnixTime(day.dt), 'EEEE')}
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
            <td>{Math.round(day.temp.max)} °C</td>
            <td>{Math.round(day.temp.min)} °C</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export type { ForecastProps };
export default Forecast;
