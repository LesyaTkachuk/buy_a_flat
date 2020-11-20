const getFamilyInfo = state => state.family.info;
const getFamilyBalance = state => state.family.info.balance;
const getFamiltGifts = state => state.family.gifts;
const getErrorMessage = state => state.family.error;
const getLoading = state => state.family.isLoading;
const getChartData = state => state.family.chart;
const getMonthsList = state => state.family.monthlyStat;
const getFamilyLoading = state => state.family.isLoading;
const getGiftsForUnpacking = state => state.family.gifts.giftsForUnpacking;
const getGiftsUnpacked = state => state.family.gifts.giftsUnpacked;
const getMonthsLeft = state => state.family.monthsLeft;
const getYearsLeft = state => state.family.yearsLeft;
const getFinance = state => state.family.finance;

export default {
  getFamilyInfo,
  getFamilyBalance,
  getErrorMessage,
  getLoading,
  getFamiltGifts,
  getChartData,
  getMonthsList,
  getFamilyLoading,
  getGiftsForUnpacking,
  getGiftsUnpacked,
  getMonthsLeft,
  getYearsLeft,
  getFinance,
};
