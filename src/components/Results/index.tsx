import Result, { ResultProps } from '../Result';
import styles from './style.module.css';

interface ResultsProps {
  results: Omit<ResultProps, 'onClick'>[];
  onResultClick: (id: number) => void;
}

function Results(props: ResultsProps): JSX.Element {
  const { results, onResultClick } = props;

  return (
    <>
      {results.length > 0 && (
        <ul className={styles.results}>
          {results.map((result) => (
            <li key={result.id}>
              <Result onClick={onResultClick} {...result} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export type { ResultsProps };
export default Results;
