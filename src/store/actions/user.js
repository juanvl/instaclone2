import axios from 'axios';
import config from '~config';
import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER } from './actionTypes';

const authBaseURL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const {API_KEY} = config;

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  payload: user,
});

export const loadingUser = loading => ({
  type: LOADING_USER,
  payload: loading,
});

export const login = user => async dispatch => {
  dispatch(loadingUser(true));
  const res = await axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
    email: user.email,
    password: user.password,
    returnSecureToken: true,
  });

  if (res.data.localId) {
    const dbUser = await axios.get(`/users/${res.data.localId}.json`);
    delete user.password;
    user.name = dbUser.data.name;
    dispatch(userLoggedIn(user));
    dispatch(loadingUser(false));
  }
};

export const logout = () => ({
  type: USER_LOGGED_OUT,
});

export const createUser = user => async dispatch => {
  dispatch(loadingUser(true));
  const res = await axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
    email: user.email,
    password: user.password,
    returnSecureToken: true,
  });

  if (res.data.localId) {
    await axios.put(`/users/${res.data.localId}.json`, {
      name: user.name,
    });
    delete user.password;
    dispatch(userLoggedIn(user));
    dispatch(loadingUser(false));
  }
};
