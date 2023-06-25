import { XCircle } from 'react-feather';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import CityPreview from '../../../components/CityPreview';
import Error from '../../../components/Error';
import Link from '../../../components/Link';
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
  const navigate = useNavigate();
  const { data: group, error, isError, isLoading } = useGroup(cities, settings);

  function onClick(id: number) {
    dispatch(removeCity(id));

    navigate('/cities');
  }

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
      {group.list.length > 0 && (
        <ul className={styles.cities}>
          {group.list.map((city) => (
            <li
              key={city.id}
              style={{
                position: 'relative',
              }}
            >
              <CityPreview {...city} />
              <button type="button" onClick={() => onClick(city.id)}>
                <XCircle />
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>
        <Link to="/cities">Back</Link>
      </p>
    </>
  );
}

export default EditPage;
