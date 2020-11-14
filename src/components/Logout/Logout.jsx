import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { globalActions } from '../../redux/global';
import styles from './Logout.module.css';

class Logout extends Component {
  handleLogout() {
    const { hideLogout, logoutUser } = this.props;

    hideLogout();
    logoutUser();
  }

  render() {
    const { hideLogout } = this.props;

    return (
      <div className={styles.modal__logout}>
        <div className={styles.logout__wrapper}>
          <h2 className={styles.logout__text}>Вы уверены что хотите выйти?</h2>
          <div className={styles.logout_wrapper__Bth}>
            <button
              className={styles.logout__Bth}
              onClick={() => this.handleLogout()}
            >
              Да
            </button>
            <button
              className={styles.logout__Bth + ' ' + styles.logout__Bth_not}
              onClick={() => hideLogout()}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  hideLogout: globalActions.toggleLogout,
  logoutUser: authOperations.logout,
};

export default connect(null, mapDispatchToProps)(Logout);
