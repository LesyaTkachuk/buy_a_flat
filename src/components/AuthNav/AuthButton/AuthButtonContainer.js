import AuthButton from './AuthButton';
import { connect } from 'react-redux';
import { globalActions } from '../../../redux/global';

const mapDispatchToProps = (dispatch, ownProps) => ({
  showModal: () => dispatch(globalActions.toggleModal()),
  toggleShowLogin: () =>
    dispatch(globalActions.toggleShowLogin(ownProps.label)),
  toggleAuthForm: () => dispatch(globalActions.toggleAuthForm(ownProps.label)),
});

export default connect(null, mapDispatchToProps)(AuthButton);
