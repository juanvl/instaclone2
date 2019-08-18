import React from 'react';
import { StatusBar } from 'react-native';
import '~config/ReactotronConfig';

import Routes from '~routes';

const App = () => (
  <>
    <StatusBar barStyle="default" />
    <Routes />
  </>
);

export default App;
