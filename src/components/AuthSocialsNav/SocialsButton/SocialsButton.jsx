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
            ? 'https://buy-a-flat.herokuapp.com/auth/google'
            : 'https://buy-a-flat.herokuapp.com/auth/facebook'
        }
        className={`${styles.buttonAuth} ${classForBtn}`}
      >
        {label}
      </a>
    );
  }
}

export default SocialsButton;
