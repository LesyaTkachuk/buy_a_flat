import React, { Component } from 'react';
import styles from './SocialsButton.module.css';

class SocialsButton extends Component {
  handleClick = () => {
    const { googleAuth, label } = this.props;
    label === 'Sign up with Google' && googleAuth();
  };

  render() {
    const { label, className: classForBtn } = this.props;
    return (
      <a
        href={
          label === 'Sign up with Google'
            ? 'https://flat-finance.herokuapp.com/auth/google'
            : '/'
        }
        className={`${styles.buttonAuth} ${classForBtn}`}
      >
        {label}
      </a>
    );
  }
}

export default SocialsButton;
