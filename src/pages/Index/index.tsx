import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

function IndexPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Weather App</title>
      </Helmet>
      <Navigate to="/cities" />
    </>
  );
}

export default IndexPage;
