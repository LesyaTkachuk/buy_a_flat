import axios from 'axios';
import { familyOperations } from '../family';
import { globalActions } from '../global';
import authActions from './authActions';

axios.defaults.baseURL = 'https://buy-a-flat.herokuapp.com/';

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
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(authActions.registerError({ code, message }));
    });
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/api/users/sign-in', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
      data.user.familyId && dispatch(familyOperations.getCurrentFamily());
    })
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(authActions.loginError({ code, message }));
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
      data.familyId && dispatch(familyOperations.getCurrentFamily());
    })
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(authActions.getCurrentUserError({ code, message }));
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
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(authActions.logoutError({ code, message }));
      dispatch(authActions.clearToken());
    });
};

const googleAuth = () => dispatch => {
  dispatch(authActions.googleAuthRequest());

  axios.get('/auth/google').then(({ data }) => {
    dispatch(authActions.googleAuthSuccess());

    token.set(data.token);
    dispatch(getCurrentUser());
  });
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  googleAuth,
};
