import { connect } from 'react-redux';
import { familySelectors } from '../../redux/family';
import Chart from './Chart';

const mapStateToProps = state => ({
  data: familySelectors.getChartData(state),
});

export default connect(mapStateToProps)(Chart);
