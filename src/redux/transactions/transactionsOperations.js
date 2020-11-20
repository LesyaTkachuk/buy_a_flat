import axios from 'axios';

axios.defaults.baseURL = 'https://buy-a-flat.herokuapp.com';

const getCategories = () => dispatch => {
  axios
    .get('api/transactions/categories')
    .then(({ data }) =>
      dispatch(transactionsActions.getCategoriesSuccess(data)),
    )
    .catch(error => {
      const message = error.response?.data?.message;
      dispatch(transactionsActions.getCategoriesError(message));
    });
}; // get api/transactions/categories response [ { name, icon}]

const getMonthData = () => dispatch => {
  transactionsActions.getMonthDataRequest();

  axios
    .get('/api/transactions/month/current')
    .then(({ data }) => dispatch(transactionsActions.getMonthDataSuccess(data)))
    .catch(error => {
      const message = error.response?.data?.message;
      dispatch(transactionsActions.getMonthDataError(message));
    });
}; // responce {
//         monthBalance,
//         dayLimit,
//         monthLimit,
//       }

const createTransaction = credentials => dispatch => {
  transactionsActions.createTransactionRequest();

  axios
    .post('/api/transactions', credentials)
    .then(({ data }) =>
      dispatch(transactionsActions.createTransactionSuccess(data)),
    )
    .catch(error => {
      const message = error.response?.data?.message;
      dispatch(transactionsActions.createTransactionError(message));
    });
}; // post('/api/transactions')
// request { amount, type, category, comment }
// responce {
//         _id,
//         amount,
//         type,
//         category,
//         comment,
//         transactionDate,
//         monthBalance,
//         dayLimit,
//         monthLimit,
//       }

const updateTransaction = credentials => dispatch => {
  transactionsActions.updateTransactionRequest();

  axios
    .put('/api/transactions/${transactionId}', credentials)
    .then(({ data }) =>
      dispatch(
        transactionsActions.updateTransactionSuccess(data.updatedFields),
      ),
    )
    .catch(error => {
      const message = error.response?.data?.message;
      dispatch(transactionsActions.updateTransactionError(message));
    });
}; // put api/transactions/${transactionId}
// request any of and combination {
//             "category",
//             "amount",
//             "comment"}
// response updatedFields {
//             "category",
//             "amount",
//             "comment"}

const deleteTransaction = () => dispatch => {
  axios
    .delete('/api/transactions/${transactionId}')
    .then(({ data }) =>
      dispatch(transactionsActions.deleteTransactionSuccess()),
    )
    .catch(error => {
      const message = error.response?.data?.message;
      dispatch(transactionsActions.deleteTransactionError(message));
    });
};
// delete api/transactions/${transactionId}

const getDailyTransactions = () => dispatch => {
  transactionsActions.getDailyTransactionsRequest();

  axios
    .get('api/transactions/day?date=${yyy-mm-dd}&page=${page}')
    .then(({ data }) =>
      dispatch(
        transactionsActions.getDailyTransactionsSuccess(data.dayRecords),
      ),
    )
    .catch(error => {
      const message = error.response?.data?.message;
      dispatch(transactionsActions.getDailyTransactionsError(message));
    });
};
// get api/transactions/day?date=${yyy-mm-dd}&page=${page}
// response { {
//     "dayRecords": [
//         {
//             "_id":,
//             "type": "EXPENSE",
//             "category",
//             "amount",
//             "comment",
//             "transactionDate",
//             "familyId",
//             "userId"
//         },

const getMonthlyTransactions = () => dispatch => {
  transactionsActions.getMonthlyTransactionsRequest();

  axios
    .get('api/transactions/stats/month?month=${month}&year=${year}')
    .then(({ data }) =>
      dispatch(
        transactionsActions.getMonthlyTransactionsSuccess(data.monthReport),
      ),
    )
    .catch(error => {
      const message = error.response?.data?.message;
      dispatch(transactionsActions.getMonthlyTransactionsError(message));
    });
};
// get api/transactions/stats/month?month=${month}&year=${year}
// response   { "transes": [ {
//             "_id",
//             "amount"}]}

export default {
  getCategories,
  getMonthData,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getDailyTransactions,
  getMonthlyTransactions,
};
