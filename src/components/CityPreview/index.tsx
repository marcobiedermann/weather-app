import { useTranslation } from 'react-i18next';
import Link from '../Link';
import styles from './style.module.css';

interface CityPreviewProps {
  id: number;
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

function CityPreview(props: CityPreviewProps): JSX.Element {
  const { id, main, name, sys } = props;
  const { t } = useTranslation();

  return (
    <Link to={`/cities/${id}`} className={styles.city}>
      <div>
        <h3 className={styles.city__country}>{sys.country}</h3>
        <h2 className={styles.city__name}>{name}</h2>
      </div>
      <div className={styles.city__temp}>{t('intlNumberCelsius', { val: main.temp })}</div>
    </Link>
  );
}

export type { CityPreviewProps };
export default CityPreview;
