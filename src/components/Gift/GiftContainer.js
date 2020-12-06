import Gift from './Gift';
import { connect } from 'react-redux';
import { globalActions, globalSelectors } from '../../redux/global';
import { familyOperations, familySelectors } from '../../redux/family';

const mapStateToProps = state => ({
  hasGifts: globalSelectors.getHasGifts(state),
  giftsForUnpacking: familySelectors.getGiftsForUnpacking(state),
  giftsUnpacked: familySelectors.getGiftsUnpacked(state),
});

const mapDispatchToProps = {
  onGiftClick: familyOperations.updateGifts,
  toggleHasGifts: globalActions.toggleHasGifts,
  setHasGiftsTrue: globalActions.setHasGiftsTrue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
