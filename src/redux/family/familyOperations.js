import axios from 'axios';
import familyActions from './familyActions';

axios.defaults.baseURL = 'https://buy-a-flat.herokuapp.com';

const addFamily = credentials => dispatch => {
  dispatch(familyActions.addFamilyRequest());

  axios
    .post('/api/families', credentials)
    .then(({ data }) => dispatch(familyActions.addFamilySuccess(data)))
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.addFamilyError({ code, message }));
    });
};

const updateFamily = credentials => dispatch => {
  dispatch(familyActions.updateFamilyRequest());

  axios
    .put(`/api/families`, credentials)
    .then(({ data }) => dispatch(familyActions.updateFamilySuccess(data)))
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.updateFamilyError({ code, message }));
    });
};

const getCurrentFamily = () => dispatch => {
  dispatch(familyActions.getCurrentFamilyRequest());

  axios
    .get(`/api/families/current`)
    .then(({ data }) => dispatch(familyActions.getCurrentFamilySuccess(data)))
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.getCurrentFamilyError({ code, message }));
    });
};

const getTransactions = () => dispatch => {
  // familyActions.getCategoriesRequest();

  axios
    .get('/api/transactions/categories')
    .then(({ data }) =>
      dispatch(familyActions.getCategoriesSuccess(data.transactionCategories)),
    )
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.getCategoriesError({ code, message }));
    });
};

const getMonthBalance = () => dispatch => {
  axios
    .get('/api/transactions/month/current')
    .then(({ data }) =>
      dispatch(familyActions.getMonthsBalanceSuccess(data.monthBalance)),
    )
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.getMonthsBalanceError({ code, message }));
    });
};

const createTransaction = credentials => dispatch => {
  familyActions.createTransactionRequest();

  axios
    .post('/api/transactions', credentials)
    .then(({ data }) => dispatch(familyActions.createTransactionSuccess(data)))
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.createTransactionError({ code, message }));
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
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.getChartDataError({ code, message }));
    });
};

const getMonthsList = () => dispatch => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  dispatch(familyActions.getMonthsListRequest());

  axios
    .get('/api/transactions/stats/annual', { params: { month, year } })
    .then(({ data }) => dispatch(familyActions.getMonthsListSuccess(data)))
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.getMonthsListError({ code, message }));
    });
};

const getFinanceData = () => dispatch => {
  dispatch(familyActions.getFinanceDataRequest());

  axios
    .get('/api/families/stats/flat')
    .then(({ data }) => dispatch(familyActions.getFinanceDataSuccess(data)))
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.getFinanceDataError({ code, message }));
    });
};

const updateGifts = () => dispatch => {
  axios
    .put('api/gifts/unpack')
    .then(({ data }) => dispatch(familyActions.updateGiftsSuccess(data.gifts)))
    .catch(error => {
      const code = error.message;
      const message = error.response?.data?.message;
      dispatch(familyActions.updateGiftsError({ code, message }));
    });
};

export default {
  addFamily,
  updateFamily,
  getCurrentFamily,
  getMonthBalance,
  getTransactions,
  createTransaction,
  getChartData,
  getMonthsList,
  getFinanceData,
  updateGifts,
};
