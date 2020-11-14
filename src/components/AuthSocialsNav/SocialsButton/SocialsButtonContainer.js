import SocialsButton from './SocialsButton';
import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';

const mapDispatchToProps = {
  googleAuth: authOperations.googleAuth,
};

export default connect(null, mapDispatchToProps)(SocialsButton);
