import React, { Component } from 'react';
import Calendar from '../../components/Calendar';
import StatisticsLists from '../../components/StatisticsLists';
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
        <StatisticsLists />
      </div>
    );
  }
}

export default Statistics;
