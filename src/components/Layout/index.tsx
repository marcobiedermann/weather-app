import React, { FC } from 'react';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

const Layout: FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <Header>
        <Grid>
          <Navigation
            routes={[
              {
                name: 'Cities',
                path: '/cities',
              },
              {
                name: 'Search',
                path: '/search',
              },
              {
                name: 'Settings',
                path: '/settings',
              },
            ]}
          />
        </Grid>
      </Header>
      <Main>
        <Grid>{children}</Grid>
      </Main>
      <Footer>
        <Grid>
          <p>
            <a href="https://openweathermap.org/" rel="noopener noreferrer" target="_blank">
              OpenWeather
            </a>
          </p>
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;
