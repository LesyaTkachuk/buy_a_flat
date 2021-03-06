import { createAction } from '@reduxjs/toolkit';

const addFamilyRequest = createAction('family/addRequest');
const addFamilySuccess = createAction('family/addSuccess');
const addFamilyError = createAction('family/addError');

const updateOrSetFamily = createAction('family/updateSetSuccess');

const updateFamilyRequest = createAction('family/updateRequest');
const updateFamilySuccess = createAction('family/updateSuccess');
const updateFamilyError = createAction('family/updateError');

const getChartDataRequest = createAction('family/getChartDataRequest');
const getChartDataSuccess = createAction('family/getChartDataSuccess');
const getChartDataError = createAction('family/getChartDataError');

const getMonthsListRequest = createAction('family/getMonthsListRequest');
const getMonthsListSuccess = createAction('family/getMonthsListSuccess');
const getMonthsListError = createAction('family/getMonthsListError');

const getFinanceDataRequest = createAction('family/getFinanceDataRequest');
const getFinanceDataSuccess = createAction('family/getFinanceDataSuccess');
const getFinanceDataError = createAction('family/getFinanceDataError');

const updateGiftsRequest = createAction('family/updateGiftsRequest');
const updateGiftsSuccess = createAction('family/updateGiftsSuccess');
const updateGiftsError = createAction('family/updateGiftsError');

const unsetGiftsUnpacked = createAction('family/unsetGifts');

const countMonthsLeft = createAction('family/countMonthsLeft');

const countYearsLeft = createAction('family/countYearsLeft');

const unsetError = createAction('family/unsetError');

export default {
  addFamilyRequest,
  addFamilySuccess,
  addFamilyError,
  updateOrSetFamily,
  updateFamilyRequest,
  updateFamilySuccess,
  updateFamilyError,
  getChartDataRequest,
  getChartDataSuccess,
  getChartDataError,
  getFinanceDataRequest,
  getFinanceDataSuccess,
  getFinanceDataError,
  getMonthsListRequest,
  getMonthsListSuccess,
  getMonthsListError,
  updateGiftsRequest,
  updateGiftsSuccess,
  updateGiftsError,
  unsetError,
  countMonthsLeft,
  countYearsLeft,
  unsetGiftsUnpacked,
};
