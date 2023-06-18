import { Link } from 'react-router-dom';
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

  return (
    <Link to={`/cities/${id}`} className={styles.city}>
      <div>
        <h3 className={styles.city__country}>{sys.country}</h3>
        <h2 className={styles.city__name}>{name}</h2>
      </div>
      <div className={styles.city__temp}>{main.temp} °C</div>
    </Link>
  );
}

export type { CityPreviewProps };
export default CityPreview;
