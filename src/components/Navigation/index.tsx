import { Link } from 'react-router-dom';
import styles from './style.module.css';

interface Route {
  name: string;
  path: string;
}

interface NavigationProps {
  routes: Route[];
}

function Navigation(props: NavigationProps): JSX.Element {
  const { routes, ...otherProps } = props;

  return (
    <nav className={styles.navigation} {...otherProps}>
      {routes.length > 0 && (
        <ul className={styles.navigation__list}>
          {routes.map((route) => (
            <li key={route.path} className={styles.navigation__item}>
              <Link to={route.path} className={styles.navigation__link}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export type { NavigationProps };
export default Navigation;
