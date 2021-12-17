import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

interface Route {
  name: string;
  path: string;
}

export interface NavigationProps {
  routes: Route[];
}

const Navigation: FC<NavigationProps> = (props) => {
  const { routes, ...otherProps } = props;

  return (
    <nav className={styles.navigation} {...otherProps}>
      <ul className={styles.navigation__list}>
        {routes.map((route) => (
          <li key={route.path} className={styles.navigation__item}>
            <Link to={route.path} className={styles.navigation__link}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
