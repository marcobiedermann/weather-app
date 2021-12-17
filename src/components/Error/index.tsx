import React, { FC } from 'react';

export interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = (props) => {
  const { message } = props;

  return <div>Error: {message}</div>;
};

export default Error;
