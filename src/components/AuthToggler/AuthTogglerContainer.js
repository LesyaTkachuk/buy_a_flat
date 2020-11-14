import AuthToggler from './AuthToggler';
import { connect } from 'react-redux';
import { globalActions, globalSelectors } from '../../redux/global';

const mapStateToProps = state => ({
  showLogin: globalSelectors.getShowLoginForm(state),
});

const mapDispatchToProps = {
  toggleShowLogin: globalActions.toggleShowLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthToggler);
