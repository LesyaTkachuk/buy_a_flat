import React, { Component } from 'react';
import Calendar from '../../components/Calendar';
import styles from './Statistics.module.css';

class Statistics extends Component {
  componentDidMount() {
    const {
      toggleStatsPage,
      getDaylyTransactions,
      getMonthlyReport,
    } = this.props;
    toggleStatsPage();
    getDaylyTransactions();

    getMonthlyReport();
  }

  componentWillUnmount() {
    this.props.toggleStatsPage();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Calendar />
      </div>
    );
  }
}

export default Statistics;
