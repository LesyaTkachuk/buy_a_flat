import { createReducer, combineReducers } from '@reduxjs/toolkit';
import familyActions from './familyActions';
import authActions from '../auth/authActions';

const initialState = {
  family: {
    info: {
      balance: 0,
      flatPrice: 0,
      flatSquareMeters: 0,
      totalSalary: 0,
      passiveIncome: 0,
      incomePercentageToSavings: 0,
    },

    monthsLeft: 0,
    yearsLeft: 0,

    monthBalance: 0,
    transactionCategories: [],

    transaction: {
      category: '',
      amount: 0,
      comment: '',
    },

    chart: null,
    monthlyStat: null,

    financeStatistics: {
      savingsPercentage: 0,
      savingsValue: 0,
      savingsInSquareMeters: 0,
      totalSquareMeters: 0,
      monthsLeftToSaveForFlat: 0,
      savingsForNextSquareMeterLeft: 0,
      giftsForUnpacking: 0,
    },

    gifts: {
      giftsUnpacked: 0,
      giftsForUnpacking: 0,
    },

    isLoading: false,
    error: {
      code: '',
      message: '',
    },
  },
};

const setFamily = (state, { payload }) => {
  const {
    balance,
    flatPrice,
    flatSquareMeters,
    totalSalary,
    passiveIncome,
    incomePercentageToSavings,
  } = payload.info;
  return {
    balance,
    flatPrice,
    flatSquareMeters,
    totalSalary,
    passiveIncome,
    incomePercentageToSavings,
  };
};
const setError = (_, { payload }) => payload;
const unsetError = () => initialState.family.error;

const info = createReducer(initialState.family.info, {
  [familyActions.updateOrSetFamily]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [familyActions.addFamilySuccess]: setFamily,
  [familyActions.updateFamilySuccess]: setFamily,
  [familyActions.getCurrentFamilySuccess]: setFamily,
  [authActions.logoutSuccess]: () => initialState.family.info,
});

const monthsLeft = createReducer(initialState.family.monthsLeft, {
  [familyActions.countMonthsLeft]: (state, { payload }) => payload.months,
  [authActions.logoutSuccess]: () => initialState.family.monthsLeft,
});

const yearsLeft = createReducer(initialState.family.yearsLeft, {
  [familyActions.countYearsLeft]: (state, { payload }) => payload.years,
  [authActions.logoutSuccess]: () => initialState.family.yearsLeft,
});

const monthBalance = createReducer(initialState.family.monthBalance, {
  [familyActions.getMonthsBalanceSuccess]: (_, { payload }) => payload,
  [familyActions.createTransactionSuccess]: (_, { payload }) =>
    payload.monthBalance,
  [authActions.logoutSuccess]: () => initialState.family.monthBalance,
});

const transactionCategories = createReducer(
  initialState.family.transactionCategories,
  {
    [familyActions.getCategoriesSuccess]: (_, { payload }) => payload,
    [authActions.logoutSuccess]: () =>
      initialState.family.transactionCategories,
  },
);

const transaction = createReducer(initialState.family.transaction, {
  [familyActions.setTransaction]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [familyActions.setTransactionAmount]: (state, { payload }) => ({
    ...state,
    amount: payload,
  }),
  [familyActions.createTransactionSuccess]: (state, { payload }) => {
    const { amount, category, comment } = payload;
    return { ...state, amount, category, comment };
  },
  [authActions.logoutSuccess]: () => initialState.family.transaction,
});

const chart = createReducer(initialState.family.chart, {
  [familyActions.getChartDataSuccess]: (_, { payload }) => payload.transes,
  [authActions.logoutSuccess]: () => initialState.family.chart,
});

const monthlyStat = createReducer(initialState.family.monthlyStat, {
  [familyActions.getMonthsListSuccess]: (_, { payload }) => payload.transes,
  [authActions.logoutSuccess]: () => initialState.family.monthlyStat,
});

const finance = createReducer(initialState.family.financeStatistics, {
  [familyActions.getFinanceDataSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialState.family.financeStatistics,
});

const gifts = createReducer(initialState.family.gifts, {
  [familyActions.updateGiftsSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [familyActions.getCurrentFamilySuccess]: (state, { payload }) => ({
    ...state,
    ...payload.gifts,
  }),
  [authActions.logoutSuccess]: () => initialState.family.gifts,
  [familyActions.unsetGiftsUnpacked]: state => ({ ...state, giftsUnpacked: 0 }),
});

const isLoading = createReducer(initialState.family.isLoading, {
  [familyActions.addFamilyRequest]: () => true,
  [familyActions.addFamilySuccess]: () => false,
  [familyActions.addFamilyError]: () => false,

  [familyActions.updateFamilyRequest]: () => true,
  [familyActions.updateFamilySuccess]: () => false,
  [familyActions.updateFamilyError]: () => false,

  [familyActions.getCurrentFamilyRequest]: () => true,
  [familyActions.getCurrentFamilySuccess]: () => false,
  [familyActions.getCurrentFamilyError]: () => false,

  [familyActions.createTransactionRequest]: () => true,
  [familyActions.createTransactionSuccess]: () => false,
  [familyActions.createTransactionError]: () => false,

  [familyActions.getChartDataRequest]: () => true,
  [familyActions.getChartDataSuccess]: () => false,
  [familyActions.getChartDataError]: () => false,

  [familyActions.getMonthsListRequest]: () => true,
  [familyActions.getMonthsListSuccess]: () => false,
  [familyActions.getMonthsListError]: () => false,

  [familyActions.getFinanceDataRequest]: () => true,
  [familyActions.getFinanceDataSuccess]: () => false,
  [familyActions.getFinanceDataError]: () => false,

  [familyActions.updateGiftsRequest]: () => true,
  [familyActions.updateGiftsSuccess]: () => false,
  [familyActions.updateGiftsError]: () => false,
});

const error = createReducer(initialState.family.error, {
  [familyActions.addFamilyError]: setError,
  [familyActions.updateFamilyError]: setError,
  [familyActions.getCurrentFamilyError]: setError,
  [familyActions.createTransactionError]: setError,
  [familyActions.updateGiftsError]: setError,
  [familyActions.getChartDataError]: setError,
  [familyActions.getMonthsListError]: setError,
  [familyActions.getFinanceDataError]: setError,
  [familyActions.getMonthsBalanceError]: setError,
  [familyActions.unsetError]: unsetError,
});

export default combineReducers({
  info,
  monthBalance,
  transactionCategories,
  transaction,
  chart,
  monthlyStat,
  finance,
  gifts,
  isLoading,
  error,
  monthsLeft,
  yearsLeft,
});
