import HeaderContent from './HeaderContent';
import { connect } from 'react-redux';
import { globalSelectors } from '../../redux/global';
import { authSelectors } from '../../redux/auth';
import { familySelectors } from '../../redux/family';

const mapStateToProps = state => ({
  showLogin: globalSelectors.getShowLoginForm(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
  isAuthFormOpen: globalSelectors.getIsAuthFormOpen(state),
  showModal: globalSelectors.getIsModalOpen(state),
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
  showVerifyNotif: globalSelectors.getIsVerifyNotifOpen(state),
});

export default connect(mapStateToProps)(HeaderContent);
