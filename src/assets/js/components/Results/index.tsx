import React, { FC } from 'react';
import Result, { ResultProps } from '../Result';
import styles from './style.module.css';

export interface ResultsProps {
  results: ResultProps[];
}

const Results: FC<ResultsProps> = (props) => {
  const { results } = props;

  return (
    <ul className={styles.results}>
      {results.map((result) => (
        <li key={result.id}>
          <Result {...result} />
        </li>
      ))}
    </ul>
  );
};

export default Results;
