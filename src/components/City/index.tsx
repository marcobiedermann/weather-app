import format from 'date-fns/format';

interface Weather {
  description: string;
  icon: string;
  id: number;
}

interface CityProps {
  dt: number;
  main: {
    temp: number;
  };
  name: string;
  weather: Weather[];
}

function City(props: CityProps): JSX.Element {
  const { dt, main, name, weather, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <h1>{name}</h1>
      {format(dt * 1000, 'yyyy-MM-dd hh:mm')}
      <div>Temp: {main.temp}</div>
      {weather && (
        <ul>
          {weather.map((entry) => (
            <li key={entry.id}>
              {entry.description}
              <img
                src={`https://openweathermap.org/img/w/${entry.icon}.png`}
                alt={entry.description}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export type { CityProps };
export default City;
