import React from 'react';
import AuthButton from './AuthButton';
import styles from './AuthNav.module.css';

function AuthButtonsWrapper() {
  return (
    <div className={styles.authButtonsWrapper}>
      <AuthButton label="Войти" />
      <AuthButton label="Регистрация" />
    </div>
  );
}

export default AuthButtonsWrapper;
