/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import LogoutButton from '../LogoutButton';
import avatar from '../../assets/icons/avatar3.svg';
import styles from './UserInfo.module.css';
import { globalActions, globalSelectors } from '../../redux/global';
import { Link } from 'react-router-dom';

function UserInfo({ showNavMenu, username, email, toggleShowNavMenu }) {
  const cropEmail = email.split('@')[0];
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt="user icon" className={styles.avatar} />
      <Media
        query="(max-width: 1239px)"
        render={() =>
          showNavMenu ? (
            <button
              className={`${styles.button} ${styles.closeIcon}`}
              onClick={() => toggleShowNavMenu()}
            ></button>
          ) : (
            <button
              className={`${styles.button} ${styles.menuIcon}`}
              onClick={() => toggleShowNavMenu()}
            ></button>
          )
        }
      />
      <Media
        query="(min-width: 1240px)"
        render={() => (
          <p className={styles.userName}>{username ? username : cropEmail}</p>
        )}
      />
      <Media query="(min-width: 1240px)" render={() => <LogoutButton />} />
    </div>
  );
}

const mapStateToprops = state => ({
  showNavMenu: globalSelectors.getShowNavMenu(state),
  username: state.auth.user.username,
  email: state.auth.user.email,
});

const mapDispatchToProps = {
  toggleShowNavMenu: globalActions.toggleShowNavMenu,
};

export default connect(mapStateToprops, mapDispatchToProps)(UserInfo);
