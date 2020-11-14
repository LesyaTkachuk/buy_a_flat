import Error from './Error';
import { connect } from 'react-redux';
import { familyActions, familySelectors } from '../../../redux/family';
import { authActions, authSelectors } from '../../../redux/auth';

const mapStateToProps = state => ({
  authErrorMessage: authSelectors.getErrorMessage(state),
  authErrorCode: authSelectors.getErrorCode(state),
  familyErrorMessage: familySelectors.getErrorMessage(state),
  familyErrorCode: familySelectors.getErrorCode(state),
});

const mapDispatchToProps = {
  unsetAuthError: authActions.unsetError,
  unsetFamilyError: familyActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
