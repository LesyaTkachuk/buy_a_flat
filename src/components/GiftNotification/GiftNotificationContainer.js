import GiftNotification from './GiftNotification';
import { connect } from 'react-redux';
import { globalActions } from '../../redux/global';
import { familyActions } from '../../redux/family';

const mapDispatchToProps = {
  toggleHasGifts: globalActions.toggleHasGifts,
  unsetGiftsUnpacked: familyActions.unsetGiftsUnpacked,
};

export default connect(null, mapDispatchToProps)(GiftNotification);
