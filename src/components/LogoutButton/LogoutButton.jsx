import React from 'react';
import { connect } from 'react-redux';
import styles from './LogoutButton.module.css';
import logoutIco from '../../assets/icons/logout.svg';
import { globalActions } from '../../redux/global';

const LogoutButton = ({ openLogout }) => (
  <div className={styles.buttonLogout} onClick={() => openLogout()}>
    <p className={styles.buttonLogoutTitle}>Выйти</p>
    <img className={styles.buttonLogoutIcon} src={logoutIco} alt={'Выйти'} />
  </div>
);

const mapDispatchToProps = {
  openLogout: globalActions.toggleLogout,
};

export default connect(null, mapDispatchToProps)(LogoutButton);
