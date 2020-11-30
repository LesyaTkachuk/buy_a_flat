import Statistics from './Statistics';
import { connect } from 'react-redux';
import { globalActions } from '../../redux/global';
import { transactionsOperations } from '../../redux/transactions';

const mapDispatchToProps = {
  toggleStatsPage: globalActions.toggleShowStatsPage,
  getDaylyTransactions: transactionsOperations.getDailyTransactions,
  getMonthlyReport: transactionsOperations.getMonthlyReport,
};

export default connect(null, mapDispatchToProps)(Statistics);
