import { PlusCircle } from 'react-feather';
import { useTranslation } from 'react-i18next';
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
  onClick: (id: number) => void;
}

function Result(props: ResultProps): JSX.Element {
  const { id, main, name, onClick, sys } = props;
  const { t } = useTranslation();

  return (
    <div className={styles.result}>
      <h3>
        {name}, {sys.country}
      </h3>
      {t('intlNumberCelsius', { val: main.temp })}

      <button type="button" onClick={() => onClick(id)}>
        <span style={{ display: 'none' }}>{t('add')}</span>
        <PlusCircle />
      </button>
    </div>
  );
}

export type { ResultProps };
export default Result;
