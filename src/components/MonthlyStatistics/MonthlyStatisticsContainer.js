import { connect } from 'react-redux';
import { globalActions, globalSelectors } from '../../redux/global';
import { familySelectors, familyOperations } from '../../redux/family';
import MonthlySavings from './MonthlyStatistics';

const mapStateToProps = state => ({
  data: familySelectors.getChartData(state),
  monthlyStat: familySelectors.getMonthsList(state),
  chartDate: globalSelectors.getChartDate(state),
});

const mapDispatchToProps = {
  getChartData: familyOperations.getChartData,
  getMonthsList: familyOperations.getMonthsList,
  setChartMonth: globalActions.chartMonth,
  setChartYear: globalActions.chartYear,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlySavings);
