import { useTranslation } from 'react-i18next';
import { addCity } from '../../reducers/cities';
import { useAppDispatch } from '../../store';
import styles from './style.module.css';

interface ResultProps {
  id: number;
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

function Result(props: ResultProps): JSX.Element {
  const { id, main, name, sys } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <div className={styles.result}>
      <h3>
        {name}, {sys.country}
      </h3>
      {main.temp}

      <button type="button" onClick={() => dispatch(addCity(id))}>
        {t('translation:add')}
      </button>
    </div>
  );
}

export type { ResultProps };
export default Result;
