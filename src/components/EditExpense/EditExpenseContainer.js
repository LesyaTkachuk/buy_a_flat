import { connect } from 'react-redux';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';
import EditExpense from './EditExpense.jsx';

const mapStateToProps = state => ({
  transaction: transactionsSelectors.getTransaction(state),
  transactionCategories: transactionsSelectors.getTransactionCategories(state),
  transactionAmount: transactionsSelectors.getTransactionAmount(state),
});

const mapDispatchToProps = {
  getCategories: transactionsOperations.getTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
