import { connect } from 'react-redux';
import { transactionsActions } from '../../redux/transactions';
import { globalActions } from '../../redux/global';
import Calculator from './Calculator';

const mapDispatchToProps = {
  setTransactionAmount: transactionsActions.setTransactionAmount,
  closeCalculator: globalActions.toggleCalculator,
};

export default connect(null, mapDispatchToProps)(Calculator);
