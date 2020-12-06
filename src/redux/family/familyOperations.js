import axios from 'axios';
import familyActions from './familyActions';

axios.defaults.baseURL = 'https://buy-a-flat.herokuapp.com';

const addFamily = credentials => dispatch => {
  dispatch(familyActions.addFamilyRequest());

  axios
    .post('/api/families', credentials)
    .then(({ data }) => dispatch(familyActions.addFamilySuccess(data)))
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(familyActions.addFamilyError(message));
    });
};

const updateFamily = credentials => dispatch => {
  dispatch(familyActions.updateFamilyRequest());

  axios
    .put(`/api/families`, credentials)
    .then(({ data }) => dispatch(familyActions.updateFamilySuccess(data)))
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(familyActions.updateFamilyError(message));
    });
};

const getChartData = () => (dispatch, getState) => {
  const {
    global: { chartDate },
  } = getState();

  dispatch(familyActions.getChartDataRequest());

  axios
    .get('/api/transactions/stats/annual', { params: chartDate })
    .then(({ data }) => dispatch(familyActions.getChartDataSuccess(data)))
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(familyActions.getChartDataError(message));
    });
};

const getMonthsList = () => (dispatch, getState) => {
  const {
    global: {
      currentDate: { month, year },
    },
  } = getState();

  dispatch(familyActions.getMonthsListRequest());

  axios
    .get('/api/transactions/stats/annual', { params: { month, year } })
    .then(({ data }) => dispatch(familyActions.getMonthsListSuccess(data)))
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(familyActions.getMonthsListError(message));
    });
};

const getFinanceData = () => dispatch => {
  dispatch(familyActions.getFinanceDataRequest());

  axios
    .get('/api/families/stats/flat')
    .then(({ data }) => dispatch(familyActions.getFinanceDataSuccess(data)))
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(familyActions.getFinanceDataError(message));
    });
};

const updateGifts = () => dispatch => {
  axios
    .put('api/gifts/unpack')
    .then(({ data }) => dispatch(familyActions.updateGiftsSuccess(data.gifts)))
    .catch(error => {
      const message = error.response?.data?.message
        ? error.response?.data?.message
        : error.message;
      dispatch(familyActions.updateGiftsError(message));
    });
};

export default {
  addFamily,
  updateFamily,
  getChartData,
  getMonthsList,
  getFinanceData,
  updateGifts,
};
