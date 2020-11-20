import { createAction } from '@reduxjs/toolkit';

const getMonthsDataRequest = createAction('transactions/getMonthsDataRequest');
const getMonthsDataSuccess = createAction('transactions/getMonthsDataSuccess');
const getMonthsDataError = createAction('transactions/getMonthsDataError');

const getCategoriesSuccess = createAction('transactions/getCategoriesSuccess');
const getCategoriesError = createAction('transactions/getCategoriesError');

const createTransactionRequest = createAction('transactions/createRequest');
const createTransactionSuccess = createAction('transactions/createSuccess');
const createTransactionError = createAction('transactions/createError');

const updateTransactionRequest = createAction('transactions/updateRequest');
const updateTransactionSuccess = createAction('transactions/updateSuccess');
const updateTransactionError = createAction('transactions/updateError');

const deleteTransactionSuccess = createAction('transactions/deleteSuccess');
const deleteTransactionError = createAction('transactions/deleteError');

const getDailyRecordsRequest = createAction('transactions/getDailyRequest');
const getDailyRecordsSuccess = createAction('transactions/getDailySuccess');
const getDailyRecordsError = createAction('transactions/getDailyError');

const getMonthlyReportRequest = createAction('transactions/getMonthlyRequest');
const getMonthlyReportSuccess = createAction('transactions/getMonthlySuccess');
const getMonthlyReportError = createAction('transactions/getMonthlyError');

const setTransaction = createAction('transactions/setTransactionSuccess');

const setTransactionAmount = createAction('transactions/setAmountSuccess');

const unsetError = createAction('transactions/unsetError');

export default {
  getCategoriesSuccess,
  getCategoriesError,
  getMonthsDataRequest,
  getMonthsDataSuccess,
  getMonthsDataError,
  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,
  updateTransactionRequest,
  updateTransactionSuccess,
  updateTransactionError,
  deleteTransactionSuccess,
  deleteTransactionError,
  getDailyRecordsRequest,
  getDailyRecordsSuccess,
  getDailyRecordsError,
  getMonthlyReportRequest,
  getMonthlyReportSuccess,
  getMonthlyReportError,
  setTransaction,
  setTransactionAmount,
  unsetError,
};
