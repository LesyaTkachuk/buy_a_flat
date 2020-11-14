import App from './App';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import { familySelectors } from '../redux/family';
import { globalSelectors } from '../redux/global';

const mapStateToProps = state => ({
  isLogoutOpen: globalSelectors.getIsLogoutOpen(state),
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
  isFamilyLoading: familySelectors.getFamilyLoading(state),
  isAuthLoading: authSelectors.getAuthLoading(state),
});
const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
