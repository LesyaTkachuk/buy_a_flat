import React from 'react';
import HeaderContent from '../../HeaderContent';
import styles from './Appbar.module.css';

function Appbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderContent />
      </div>
    </header>
  );
}

export default Appbar;
