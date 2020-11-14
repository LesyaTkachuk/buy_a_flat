import React, { Component } from 'react';
import styles from './GiftNotification.module.css';

import confetti1 from '../../assets/images/confetti-1.svg';
import confetti2 from '../../assets/images/confetti-2.svg';

class GiftNotification extends Component {
  handleClick = () => {
    const { toggleHasGifts, unsetGiftsUnpacked } = this.props;
    toggleHasGifts();
    unsetGiftsUnpacked();
  };

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.imgOne} src={confetti1} alt="confeti" />
        <img className={styles.imgTwo} src={confetti2} alt="confeti" />

        <button
          className={styles.close}
          type="button"
          onClick={this.handleClick}
        >
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="black"
              fillOpacity="0.34"
            />
          </svg>
        </button>

        <h2 className={styles.title}>Ура! Поздравляем!</h2>
        <p className={styles.text}> Вы еще ближе к цели!</p>
        <p className={styles.text}>
          Порадуйте друг друга приятными подарками!{' '}
        </p>
      </div>
    );
  }
}

export default GiftNotification;
