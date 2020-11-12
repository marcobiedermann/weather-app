import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import './style.module.css';

const Layout = (props) => {
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

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
