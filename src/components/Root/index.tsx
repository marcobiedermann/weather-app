import { createBrowserRouter } from 'react-router-dom';
import i18n from '../../i18n';
import store, { persistor } from '../../store';
import routes from '../../utils/routes';
import Providers from '../Providers';

function Root(): JSX.Element {
  return (
    <Providers
      i18n={i18n}
      persistor={persistor}
      router={createBrowserRouter(routes)}
      store={store}
    />
  );
}

export default Root;
