import React, { FC } from 'react';
import Weather from '../Weather';

export interface Current {
  name: string;
}

const Current: FC<Current> = (props) => {
  const { name, ...otherProps } = props;

  return (
    <div>
      <h2>{name}</h2>
      <Weather {...otherProps} />
    </div>
  );
};

export default Current;
