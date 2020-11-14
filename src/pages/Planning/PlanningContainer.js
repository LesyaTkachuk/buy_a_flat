import Planning from './Planning';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
});

export default connect(mapStateToProps)(Planning);
