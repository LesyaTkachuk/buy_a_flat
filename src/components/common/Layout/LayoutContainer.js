import Layout from './Layout';
import { connect } from 'react-redux';
import { globalSelectors } from '../../../redux/global';

const mapStateToProps = state => ({
  showExpensesPage: globalSelectors.getShowExpensesPage(state),
  showStatsPage: globalSelectors.getShowStatsPage(state),
});

export default connect(mapStateToProps)(Layout);
