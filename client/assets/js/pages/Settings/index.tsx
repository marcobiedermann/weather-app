import React from 'react';
import { Helmet } from 'react-helmet';
import Settings from '../../containers/Settings';

const SettingsPage = () => (
  <div>
    <Helmet>
      <title>Settings</title>
    </Helmet>
    <Settings />
  </div>
);

export default SettingsPage;
