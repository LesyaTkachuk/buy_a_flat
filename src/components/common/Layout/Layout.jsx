import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';

class Layout extends React.Component {
  render() {
    const { getShowExpensesPage, children } = this.props;

    return getShowExpensesPage ? (
      <div className={styles.container}>{children}</div>
    ) : (
      <div> {children}</div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
