import { connect } from 'react-redux';
import { familyActions } from '../../redux/family';
import { globalActions } from '../../redux/global';
import Calculator from './Calculator';

const mapDispatchToProps = {
  setTransactionAmount: familyActions.setTransactionAmount,
  closeCalculator: globalActions.toggleCalculator,
};

export default connect(null, mapDispatchToProps)(Calculator);
