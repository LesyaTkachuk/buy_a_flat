import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';

class Layout extends React.Component {
  defineClass = () => {
    const { showExpensesPage, showStatsPage } = this.props;
    if (showExpensesPage) {
      return styles.containerExpenses;
    } else if (showStatsPage) {
      return styles.containerStats;
    } else {
      console.log('else');
      return styles.container;
    }
  };
  render() {
    const { children } = this.props;
    return <div className={this.defineClass()}>{children}</div>;
  }

  // return getShowExpensesPage ? (
  //   <div className={styles.containerExpense}>{children}</div>
  // ) : (
  //   <div> {children}</div>
  // );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
