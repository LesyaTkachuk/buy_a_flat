import Layout from './Layout';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import { familySelectors } from '../../../redux/family';
import { globalSelectors } from '../../../redux/global';
import { transactionsSelectors } from '../../../redux/transactions';

const mapStateToProps = state => ({
  isLogoutOpen: globalSelectors.getIsLogoutOpen(state),
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
  transactionError: transactionsSelectors.getError(state),
  isFamilyLoading: familySelectors.getFamilyLoading(state),
  isAuthLoading: authSelectors.getAuthLoading(state),
  isTransactionLoading: transactionsSelectors.getLoading(state),
  showExpensesPage: globalSelectors.getShowExpensesPage(state),
  showStatsPage: globalSelectors.getShowStatsPage(state),
});
const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
