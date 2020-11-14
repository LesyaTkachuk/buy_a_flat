import React, { Component } from 'react';
import styles from './Error.module.css';

class Error extends Component {
  handleClick() {
    const {
      authErrorCode,
      familyErrorCode,
      unsetAuthError,
      unsetFamilyError,
    } = this.props;
    authErrorCode && unsetAuthError();
    familyErrorCode && unsetFamilyError();
  }

  render() {
    const {
      authErrorCode,
      authErrorMessage,
      familyErrorCode,
      familyErrorMessage,
    } = this.props;

    return (
      <div className={styles.container}>
        <button
          className={styles.closeModal}
          onClick={() => this.handleClick()}
        ></button>
        <div className={styles.errorWrapper}>
          <h2 className={styles.errorTitle}>Oops, an error occurred</h2>
          {/* <p className={styles.errorText}>{authErrorCode || familyErrorCode}</p> */}
          {(familyErrorMessage || authErrorMessage) && (
            <p className={styles.errorText}>
              {authErrorMessage || familyErrorMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Error;
