import PlanForm from './PlanForm';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import {
  familyActions,
  familyOperations,
  familySelectors,
} from '../../redux/family';

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
  currentFamily: familySelectors.getFamilyInfo(state),
});

const mapDispatchToProps = {
  getFamily: familyOperations.getCurrentFamily,
  setFamily: familyActions.updateOrSetFamily,
  countMonthsLeft: familyActions.countMonthsLeft,
  countYearsLeft: familyActions.countYearsLeft,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanForm);
