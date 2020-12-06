import axios from 'axios';
import { familyOperations } from '../family';
import { globalActions } from '../global';
import authActions from './authActions';

axios.defaults.baseURL = 'https://buy-a-flat.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => (dispatch, getState) => {
  const {
    global: { isModalOpen },
  } = getState();

  dispatch(authActions.registerRequest());
  isModalOpen && dispatch(globalActions.toggleModal());

  axios
    .post('/api/users/sign-up', credentials)
    .then(({ data }) => {
      dispatch(authActions.registerSuccess(data));
      dispatch(globalActions.toggleVerifyNotif());
    })
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(authActions.registerError(message));
    });
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/api/users/sign-in', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(authActions.loginError(message));
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/api/users/current')
    .then(({ data }) => {
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch(error => {
      console.dir(error);
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(authActions.getCurrentUserError(message));
      dispatch(authActions.clearToken());
    });
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .delete('/api/users/sign-out')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(authActions.logoutError(message));
      dispatch(authActions.clearToken());
    });
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
