import React, { Component } from 'react';
import { connect } from 'react-redux';
import { globalActions } from '../../redux/global';
import styles from './VerifyNotif.module.css';

class VerifyNotif extends Component {
  render() {
    return (
      <div className={styles.container}>
        <button
          className={styles.closeModal}
          onClick={() => this.props.closeVerifyNotif()}
        ></button>
        <div className={styles.notifWrapper}>
          <h2 className={styles.notifTitle}>Pay attention!</h2>
          <p className={styles.notifText}>
            Для завершения регистрации, пройдите по ссылке, отправленной на
            указанный вами email и выполните вход в приложение.
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  closeVerifyNotif: globalActions.toggleVerifyNotif,
};

export default connect(null, mapDispatchToProps)(VerifyNotif);
