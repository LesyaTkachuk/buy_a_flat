import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('global/toggleModal');

const toggleShowLogin = createAction('global/toggleShowLogin');

const toggleAuthForm = createAction('global/toggleAuthForm');

const toggleHasGifts = createAction('global/toggleHasGifts');

const toggleLogout = createAction('global/toggleLogout');

const toggleVerifyNotif = createAction('global/toggleVerifyNotif');

const toggleShowNavPage = createAction('global/toggleShowNavPage');

const toggleShowExpensesPage = createAction('global/toggleShowExpensesPage');

const toggleShowStatsPage = createAction('global/toggleShowStatsPage');

const toggleCalculator = createAction('global/toggleCalculator');

const toggleExpenseBtnActive = createAction('global/toggleExpenseBtnActive');

const togglePlanBtnActive = createAction('global/togglePlanBtnActive');

const currentYear = createAction('global/currentYear');
const currentMonth = createAction('global/currentMonth');
const chartYear = createAction('global/chartYear');
const chartMonth = createAction('global/chartMonth');
export default {
  toggleModal,
  toggleShowLogin,
  toggleHasGifts,
  toggleLogout,
  toggleVerifyNotif,
  toggleShowNavPage,
  toggleAuthForm,
  toggleShowExpensesPage,
  toggleShowStatsPage,
  toggleCalculator,
  toggleExpenseBtnActive,
  togglePlanBtnActive,
  currentYear,
  currentMonth,
  chartYear,
  chartMonth,
};
