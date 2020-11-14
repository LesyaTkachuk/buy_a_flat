import { connect } from 'react-redux';
import { globalActions } from '../../redux/global';
import ExpensesPage from './Expenses';

const mapDispatchToProps = {
  toggleShowExpensesPage: globalActions.toggleShowExpensesPage,
};

export default connect(null, mapDispatchToProps)(ExpensesPage);
