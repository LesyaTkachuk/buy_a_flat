import React from 'react';
import Error from '../Error';
import Modal from '../Modal';
import Logout from '../../Logout';
import Spinner from '../Spinner';
import styles from './Layout.module.css';

class Layout extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  defineClass = () => {
    const { showExpensesPage, showStatsPage } = this.props;
    if (showExpensesPage) {
      return styles.containerExpenses;
    } else if (showStatsPage) {
      return styles.containerStats;
    } else {
      return styles.container;
    }
  };
  render() {
    const {
      children,
      familyError,
      authError,
      transactionError,
      isLogoutOpen,
      isFamilyLoading,
      isAuthLoading,
      isTransactionLoading,
    } = this.props;
    return (
      <div className={this.defineClass()}>
        {children}
        {(isFamilyLoading || isAuthLoading || isTransactionLoading) && (
          <Modal>
            <Spinner />
          </Modal>
        )}
        {(authError || familyError || transactionError) && (
          <Modal>
            <Error />
          </Modal>
        )}
        {isLogoutOpen && (
          <Modal>
            <Logout />
          </Modal>
        )}
      </div>
    );
  }
}

export default Layout;
