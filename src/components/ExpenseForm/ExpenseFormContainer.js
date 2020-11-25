import { connect } from 'react-redux';
import {
  transactionsActions,
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';
import { globalActions, globalSelectors } from '../../redux/global';
import ExpensesForm from './ExpenseForm';

const mapStateToProps = state => ({
  monthBalance: transactionsSelectors.getMonthBalance(state),
  transaction: transactionsSelectors.getTransaction(state),
  transactionCategories: transactionsSelectors.getTransactionCategories(state),
  transactionAmount: transactionsSelectors.getTransactionAmount(state),
  isCalculatorOpen: globalSelectors.getIsCalculatorOpen(state),
  isExpenseBtnActive: globalSelectors.getIsExpenseBtnActive(state),
});

const mapDispatchToProps = {
  getMonthBalance: transactionsOperations.getMonthsData,
  getCategories: transactionsOperations.getCategories,
  setTransaction: transactionsActions.setTransaction,
  setCalculatorOpen: globalActions.toggleCalculator,
  setExpenseBtnActive: globalActions.toggleExpenseBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
