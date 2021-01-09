import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import useSWR from 'swr';
import Card from '../../../components/Card';
import City from '../../../components/CityPreview';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { SEARCH } from '../../../constants/routes';
import { removeCity, selectCities } from '../../../reducers/cities';
import styles from './style.module.css';

interface EditPageQuery {
  cnt: number;
  list: List[];
}

interface List {
  coord: Coord;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
}

interface Clouds {
  all: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
}

const EditPage: FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const { data, error } = useSWR<EditPageQuery>(`/group?id=${cities.join(',')}`);

  if (error) {
    return <Error message={error.message} />;
  }

  if (!data) {
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
            <Link to={SEARCH.path}>Add</Link>
          </Card>
        </li>
      </ul>
    </>
  );
};

export default EditPage;
