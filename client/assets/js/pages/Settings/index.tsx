import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import Settings from '../../containers/Settings';

const SettingsPage: FC = () => (
  <div>
    <Helmet>
      <title>Settings</title>
    </Helmet>
    <Settings />
  </div>
);

export default SettingsPage;
