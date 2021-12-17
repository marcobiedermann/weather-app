import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

const Providers: FC = (props) => <Provider store={store} {...props} />;

export default Providers;
