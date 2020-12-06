import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { authActions } from '../auth';
import transactionsActions from './transactionsActions';

const initialState = {
  transactions: {
    monthData: {
      monthBalance: 0,
      dayLimit: 0,
      monthLimit: 0,
    },

    transactionCategories: [], // {name, icon}

    transaction: {
      id: '',
      category: '',
      amount: 0,
      comment: '',
    },

    transactionsDate: '',
    page: 0,

    dayRecords: [],
    monthReport: [], //{name, amount, percentage}

    isLoading: false,
    error: '',
  },
};

const setMonthData = (_, { payload }) => {
  const { monthBalance, dayLimit, monthLimit } = payload;
  return { monthBalance, dayLimit, monthLimit };
};
const setTransaction = (_, { payload }) => {
  const { _id: id, amount, category, comment } = payload;
  return { id, amount, category, comment };
};
const unsetTransaction = () => initialState.transactions.transaction;
const setError = (_, { payload }) => payload;
const unsetError = () => initialState.transactions.error;

const monthData = createReducer(initialState.transactions.monthData, {
  [transactionsActions.getMonthsDataSuccess]: (_, { payload }) => payload,
  [transactionsActions.createTransactionSuccess]: setMonthData,
  [transactionsActions.updateTransactionSuccess]: setMonthData,
  [authActions.logoutSuccess]: () => initialState.transactions.monthData,
});

const transactionCategories = createReducer(
  initialState.transactions.transactionCategories,
  {
    [transactionsActions.getCategoriesSuccess]: (_, { payload }) => payload,
  },
);

const transaction = createReducer(initialState.transactions.transaction, {
  [transactionsActions.setTransaction]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [transactionsActions.setTransactionAmount]: (state, { payload }) => ({
    ...state,
    amount: payload,
  }),
  [transactionsActions.createTransactionSuccess]: setTransaction,
  [transactionsActions.updateTransactionSuccess]: setTransaction,
  [transactionsActions.deleteTransactionSuccess]: unsetTransaction,
  [authActions.logoutSuccess]: unsetTransaction,
});

const transactionsDate = createReducer(
  initialState.transactions.transactionsDate,
  { [transactionsActions.setTransactionsDate]: (_, { payload }) => payload },
);
const page = createReducer(initialState.transactions.page, {});

const dayRecords = createReducer(initialState.transactions.dayRecords, {
  [transactionsActions.getDailyRecordsSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialState.transactions.dayRecords,
});
const monthReport = createReducer(initialState.transactions.monthReport, {
  [transactionsActions.getMonthlyReportSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialState.transactions.monthReport,
});

const isLoading = createReducer(initialState.transactions.isLoading, {
  [transactionsActions.createTransactionRequest]: () => true,
  [transactionsActions.createTransactionSuccess]: () => false,
  [transactionsActions.createTransactionError]: () => false,

  [transactionsActions.updateTransactionRequest]: () => true,
  [transactionsActions.updateTransactionSuccess]: () => false,
  [transactionsActions.updateTransactionError]: () => false,

  [transactionsActions.getMonthDataRequest]: () => true,
  [transactionsActions.getMonthDataSuccess]: () => false,
  [transactionsActions.getMonthDataError]: () => false,

  [transactionsActions.getDailyTransactionsRequest]: () => true,
  [transactionsActions.getDailyTransactionsSuccess]: () => false,
  [transactionsActions.getDailyTransactionsError]: () => false,

  [transactionsActions.getMonthlyTransactionsRequest]: () => true,
  [transactionsActions.getMonthlyTransactionsSuccess]: () => false,
  [transactionsActions.getMonthlyTransactionsError]: () => false,
});

const error = createReducer(initialState.transactions.error, {
  [transactionsActions.getCategoriesError]: setError,
  [transactionsActions.getMonthDataError]: setError,
  [transactionsActions.createTransactionError]: setError,
  [transactionsActions.updateTransactionError]: setError,
  [transactionsActions.deleteTransactionError]: setError,
  [transactionsActions.getDailyTransactionsError]: setError,
  [transactionsActions.getMonthlyTransactionsSuccess]: setError,
  [transactionsActions.unsetError]: unsetError,
});

export default combineReducers({
  monthData,
  transactionCategories,
  transaction,
  transactionsDate,
  page,
  dayRecords,
  monthReport,
  isLoading,
  error,
});
