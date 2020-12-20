import PrognosisExpense from './PrognosisExpense';
import { connect } from 'react-redux';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';
import { globalActions, globalSelectors } from '../../redux/global';

const mapStateToProps = state => ({
  dayLimit: transactionsSelectors.dayLimit(state),
  monthLimit: transactionsSelectors.monthLimit(state),
  transaction: transactionsSelectors.getTransaction(state),
  isExpenseBtnActive: globalSelectors.getIsExpenseBtnActive(state),
});

const mapDispatchToProps = {
  createTransaction: transactionsOperations.createTransaction,
  setExpenseBtnActive: globalActions.toggleExpenseBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisExpense);
