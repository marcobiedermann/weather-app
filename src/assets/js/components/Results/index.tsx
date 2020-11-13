import React, { FC } from 'react';
import Result, { ResultProps } from '../Result';

export interface ResultsProps {
  results: ResultProps[];
}

const Results: FC<ResultsProps> = (props) => {
  const { results } = props;

  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>
          <Result {...result} />
        </li>
      ))}
    </ul>
  );
};

export default Results;
