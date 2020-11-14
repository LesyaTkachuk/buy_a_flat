import Home from './Home';
import { connect } from 'react-redux';
import { globalSelectors } from '../../redux/global';
import { authActions, authOperations } from '../../redux/auth';

const mapStateToProps = state => ({
  showLoginForm: globalSelectors.getShowLoginForm(state),
});

const mapDispatchToProps = {
  setToken: authActions.setToken,
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
