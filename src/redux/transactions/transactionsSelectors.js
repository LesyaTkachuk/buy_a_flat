const getTransactionCategories = state =>
  state.transactions.transactionCategories;
const getTransaction = state => state.transactions.transaction;
const getTransactionAmount = state => state.transactions.transaction.amount;
const getMonthBalance = state => state.transactions.monthData.monthBalance;
const getError = state => state.transactions.error;
const getLoading = state => state.transactions.isLoading;
const dayLimit = state => state.transactions.monthData.dayLimit;
const monthLimit = state => state.transactions.monthData.monthLimit;

export default {
  getTransactionCategories,
  getTransaction,
  getTransactionAmount,
  getMonthBalance,
  getError,
  getLoading,
  dayLimit,
  monthLimit,
};
