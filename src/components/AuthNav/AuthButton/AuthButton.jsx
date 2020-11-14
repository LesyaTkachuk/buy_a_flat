import React, { Component } from 'react';
import styles from './AuthButton.module.css';

class AuthButton extends Component {
  handleClick = () => {
    const { showModal, toggleShowLogin, toggleAuthForm } = this.props;
    showModal();
    toggleShowLogin();
    toggleAuthForm();
  };
  render() {
    const { label, className: classForBtn } = this.props;
    return (
      <button
        className={`${styles.authButton} ${classForBtn}`}
        onClick={this.handleClick}
      >
        {label}
      </button>
    );
  }
}

export default AuthButton;
