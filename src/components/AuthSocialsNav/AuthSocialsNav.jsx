import React from 'react';
import Button from './SocialsButton';
import styles from './AuthSocialsNav.module.css';

function ButtonsWrapper() {
  return (
    <div className={styles.buttons__wrapper}>
      <Button
        label="Sign up with Google"
        className={styles.google_btn}
        data-name="Google"
      ></Button>
      {/* <Button
        label="Sign up with Facebook"
        className={styles.facebook_btn}
        data-name="Facebook"
      ></Button> */}
    </div>
  );
}
export default ButtonsWrapper;
