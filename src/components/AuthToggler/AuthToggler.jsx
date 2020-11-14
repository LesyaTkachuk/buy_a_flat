import React, { Component } from 'react';
import styles from './AuthToggler.module.css';

class AuthToggler extends Component {
  render() {
    const { showLogin, toggleShowLogin } = this.props;
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>
          {showLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
        </p>
        <button className={styles.button} onClick={() => toggleShowLogin()}>
          {showLogin ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </div>
    );
  }
}

export default AuthToggler;
