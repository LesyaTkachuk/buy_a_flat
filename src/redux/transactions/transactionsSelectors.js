const getTransactionCategories = state =>
  state.transactions.transactionCategories;
const getTransaction = state => state.transactions.transaction;
const getTransactionAmount = state => state.transactions.transaction.amount;
const getMonthBalance = state => state.transactions.monthBalance;
const getError = state => state.transactions.error;
const getLoading = state => state.transactions.isLoading;

export default {
  getTransactionCategories,
  getTransaction,
  getTransactionAmount,
  getMonthBalance,
  getError,
  getLoading,
};
