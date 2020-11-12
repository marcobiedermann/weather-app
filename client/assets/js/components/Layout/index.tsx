import React, { FC } from 'react';
import * as routes from '../../constants/routes';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import './style.module.css';

const Layout: FC = (props) => {
  const { children, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <Header>
        <Grid>
          <Navigation routes={[routes.INDEX, routes.CITIES, routes.SEARCH, routes.SETTINGS]} />
        </Grid>
      </Header>
      <Main>
        <Grid>{children}</Grid>
      </Main>
      <Footer>
        <Grid>FOOTER</Grid>
      </Footer>
    </div>
  );
};

export default Layout;
