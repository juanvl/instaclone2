import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import axios from 'axios';
import { name as appName } from './app.json';
import App from '~';
import store from '~store';

axios.defaults.baseURL = 'https://instaclone2-37e57.firebaseio.com/';

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
