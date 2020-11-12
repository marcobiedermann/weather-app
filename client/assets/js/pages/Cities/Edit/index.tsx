import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { removeCity } from '../../../actions/cities';
import Card from '../../../components/Card';
import City from '../../../components/City';
import * as routes from '../../../constants/routes';
import styles from './style.module.css';

const EditPage: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <ul className={styles.cities}>
        {cities.map((city) => (
          <li key={city.id}>
            <Card>
              <City {...city} />
              <button type="button" onClick={() => removeCity(city.id)}>
                x
              </button>
            </Card>
          </li>
        ))}
        <li>
          <Card>
            <Link to={routes.SEARCH.path}>Add</Link>
          </Card>
        </li>
      </ul>
    </div>
  );
};

export default EditPage;
