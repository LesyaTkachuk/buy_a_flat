import Error from './Error';
import { connect } from 'react-redux';
import { familyActions, familySelectors } from '../../../redux/family';
import { authActions, authSelectors } from '../../../redux/auth';
import {
  transactionsActions,
  transactionsSelectors,
} from '../../../redux/transactions';

const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
  transactionError: transactionsSelectors.getError(state),
});

const mapDispatchToProps = {
  unsetAuthError: authActions.unsetError,
  unsetFamilyError: familyActions.unsetError,
  unsetTransactionsError: transactionsActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
