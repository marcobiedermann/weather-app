import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header>
        <Navigation
          routes={[
            routes.INDEX,
            routes.CITIES,
            routes.SETTINGS,
          ]}
        />
      </Header>
      <Main>{children}</Main>
      <Footer>FOOTER</Footer>
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
