import clsx from 'clsx';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

interface Route {
  icon?: ReactNode;
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
          {routes.map((route) => {
            const { icon, name, path } = route;

            return (
              <li key={path} className={styles.navigation__item}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    clsx(styles.navigation__link, {
                      [styles.navigation__linkActive]: isActive,
                    })
                  }
                >
                  {icon}
                  <span>{name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export type { NavigationProps };
export default Navigation;
