import axios from 'axios';

// DEFAULT SETTINGS
axios.defaults.baseURL = 'https://buy-a-flat.herokuapp.com';
axios.defaults.headers.get['Content-Type'] = 'application.json';
axios.defaults.headers.post['Content-Type'] = 'application.json';
axios.defaults.headers.put['Content-Type'] = 'application.json';

// SET AND UNSET TOKEN
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// AUTHORIZATION

// FAMILY

export default {
  token,
};
