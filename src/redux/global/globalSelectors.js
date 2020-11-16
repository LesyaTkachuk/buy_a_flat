const getIsLogoutOpen = state => state.global.isLogoutOpen;

const getIsVerifyNotifOpen = state => state.global.isVerifyNotifOpen;

const getIsAuthFormOpen = state => state.global.isAuthFormOpen;

const getHasGifts = state => state.global.hasGifts;

const getShowNavMenu = state => state.global.showNavMenu;

const getIsModalOpen = state => state.global.isModalOpen;

const getShowLoginForm = state => state.global.showLogin;

const getShowExpensesPage = state => state.global.showExpensesPage;

const getShowStatsPage = state => state.global.showStatsPage;

const getIsCalculatorOpen = state => state.global.isCalculatorOpen;

const getIsExpenseBtnActive = state => state.global.isExpenseBtnActive;

const getIsPlanBtnActive = state => state.global.isPlanBtnActive;

const getChartDate = state => state.global.chartDate;

export default {
  getIsLogoutOpen,
  getIsVerifyNotifOpen,
  getIsAuthFormOpen,
  getHasGifts,
  getShowExpensesPage,
  getShowStatsPage,
  getShowNavMenu,
  getIsModalOpen,
  getShowLoginForm,
  getIsCalculatorOpen,
  getIsExpenseBtnActive,
  getIsPlanBtnActive,
  getChartDate,
};
