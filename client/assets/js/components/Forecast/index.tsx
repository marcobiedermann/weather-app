import React, { FC } from 'react';
import City, { CityProps } from '../City';

export interface ForecaseProps {
  list: CityProps[];
}

const Forecast: FC<ForecaseProps> = (props) => {
  const { list, ...otherProps } = props;

  return (
    <div {...otherProps}>
      {list && (
        <ul>
          {list.map((city) => (
            <li key={city.dt}>
              <City {...city} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Forecast;
