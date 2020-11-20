import React, { Component } from 'react';
import styles from './Error.module.css';

class Error extends Component {
  handleClick() {
    const {
      authError,
      familyError,
      transactionError,
      unsetAuthError,
      unsetFamilyError,
      unsetTransactionsError,
    } = this.props;
    authError && unsetAuthError();
    familyError && unsetFamilyError();
    transactionError && unsetTransactionsError();
  }

  render() {
    const { authError, familyError, transactionError } = this.props;

    return (
      <div className={styles.container}>
        <button
          className={styles.closeModal}
          onClick={() => this.handleClick()}
        ></button>
        <div className={styles.errorWrapper}>
          <h2 className={styles.errorTitle}>Oops, an error occurred</h2>
          {(familyError || authError || transactionError) && (
            <p className={styles.errorText}>
              {authError || familyError || transactionError}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Error;
