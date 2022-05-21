import React from 'react';

interface ErrorProps {
  message: string;
}

function Error(props: ErrorProps): JSX.Element {
  const { message } = props;

  return <div>Error: {message}</div>;
}

export type { ErrorProps };
export default Error;
