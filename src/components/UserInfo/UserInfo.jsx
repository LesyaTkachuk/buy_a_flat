/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import LogoutButton from '../LogoutButton';
import avatar from '../../assets/icons/avatar3.svg';
import styles from './UserInfo.module.css';
import { globalSelectors } from '../../redux/global';
import { Link } from 'react-router-dom';

function UserInfo({ showNavPage, username, email }) {
  const cropEmail = email.split('@')[0];
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt="user icon" className={styles.avatar} />
      <Media
        query="(max-width: 1239px)"
        render={() =>
          showNavPage ? (
            <button className={`${styles.button} ${styles.closeIcon}`}></button>
          ) : (
            <Link to="/navigation">
              <button
                className={`${styles.button} ${styles.menuIcon}`}
              ></button>
            </Link>
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
  showNavPage: globalSelectors.getShowNavPage(state),
  username: state.auth.user.username,
  email: state.auth.user.email,
});

export default connect(mapStateToprops)(UserInfo);
