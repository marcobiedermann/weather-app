import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import City from '../../../components/CityPreview';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useGroup } from '../../../hooks';
import { removeCity } from '../../../reducers/cities';
import { selectCities } from '../../../selectors/cities';
import { selectSettings } from '../../../selectors/settings';
import { useAppDispatch, useAppSelector } from '../../../store';
import styles from './style.module.css';

function EditPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(selectCities);
  const settings = useAppSelector(selectSettings);
  const { data, error, isError, isLoading } = useGroup(cities, settings);

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <ul className={styles.cities}>
        {data.list.map((city) => (
          <li key={city.id}>
            <Card>
              <City {...city} />
              <button type="button" onClick={() => dispatch(removeCity(city.id))}>
                x
              </button>
            </Card>
          </li>
        ))}
        <li>
          <Card>
            <Link to="/search">Add</Link>
          </Card>
        </li>
      </ul>
    </>
  );
}

export default EditPage;
