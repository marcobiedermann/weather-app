import Result, { ResultProps } from '../Result';
import styles from './style.module.css';

interface ResultsProps {
  results: ResultProps[];
}

function Results(props: ResultsProps): JSX.Element {
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
}

export type { ResultsProps };
export default Results;
