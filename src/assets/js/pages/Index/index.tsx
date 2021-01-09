import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { CITIES } from '../../constants/routes';

const IndexPage: FC = () => (
  <>
    <Helmet>
      <title>Weather App</title>
    </Helmet>
    <Redirect to={CITIES.path} />
  </>
);

export default IndexPage;
