import { useTranslation } from 'react-i18next';
import { addCity } from '../../reducers/cities';
import { useAppDispatch } from '../../store';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'react-feather';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  function onClick(id: number) {
    dispatch(addCity(id));

    navigate('/cities');
  }

  return (
    <div className={styles.result}>
      <h3>
        {name}, {sys.country}
      </h3>
      {main.temp}

      <button type="button" onClick={() => onClick(id)}>
        <span style={{ display: 'none' }}>{t('translation:add')}</span>
        <PlusCircle />
      </button>
    </div>
  );
}

export type { ResultProps };
export default Result;
