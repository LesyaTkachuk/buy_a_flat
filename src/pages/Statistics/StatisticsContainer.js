import Statistics from './Statistics';
import { connect } from 'react-redux';
import { globalActions } from '../../redux/global';

const mapDispatchToProps = {
  toggleStatsPage: globalActions.toggleShowStatsPage,
};

export default connect(null, mapDispatchToProps)(Statistics);
