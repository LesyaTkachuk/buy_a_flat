import Layout from './Layout';
import { connect } from 'react-redux';
import { globalSelectors } from '../../../redux/global';

const mapStateToProps = state => ({
  getShowExpensesPage: globalSelectors.getShowExpensesPage(state),
});

export default connect(mapStateToProps)(Layout);
