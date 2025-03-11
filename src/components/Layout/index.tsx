import { Suspense } from 'react';
import { Grid, Loader, Settings } from 'react-feather';
import { Outlet, createSearchParams, useNavigate } from 'react-router';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import Search from '../Search';
import styles from './style.module.css';

interface FormData {
  query: string;
}

function Layout(): JSX.Element {
  const navigate = useNavigate();

  function onSearchSubmit(data: FormData) {
    const { query } = data;
    const search = createSearchParams({
      query,
    }).toString();

    navigate({
      pathname: 'search',
      search,
    });
  }

  return (
    <div className={styles.layout}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Header>
          <Search onSubmit={onSearchSubmit} />
        </Header>
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer>
          <p>
            Data provided by the{' '}
            <a href="https://openweathermap.org/" rel="noopener noreferrer" target="_blank">
              OpenWeather
            </a>{' '}
            API.
          </p>
        </Footer>
      </div>
      <aside
        style={{
          backgroundColor: '#eef2f3',
          color: '#0e2546',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minWidth: 300,
          order: -1,
          paddingBlock: '3em',
        }}
      >
        <div>
          <div style={{ paddingInline: '3em' }}>
            <h4>Application</h4>
          </div>
          <Navigation
            routes={[
              {
                name: 'Dashboard',
                path: '/cities',
                icon: <Grid />,
              },
            ]}
          />
        </div>
        <div>
          <div style={{ paddingInline: '3em' }}>
            <h4>System</h4>
          </div>
          <Navigation
            routes={[
              {
                name: 'Settings',
                path: '/settings',
                icon: <Settings />,
              },
            ]}
          />
        </div>
      </aside>
    </div>
  );
}

export default Layout;
