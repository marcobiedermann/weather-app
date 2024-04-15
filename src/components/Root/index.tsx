import store, { persistor } from '../../store';
import { router } from '../../utils/routes';
import Providers from '../Providers';

function Root(): JSX.Element {
  return <Providers persistor={persistor} router={router} store={store} />;
}

export default Root;
