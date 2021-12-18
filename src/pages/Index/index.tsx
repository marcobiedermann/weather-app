import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

const IndexPage: FC = () => (
  <>
    <Helmet>
      <title>Weather App</title>
    </Helmet>
    <Navigate to="/cities" />
  </>
);

export default IndexPage;
