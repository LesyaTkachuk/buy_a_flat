import React, { Component } from 'react';
import Calendar from '../../components/Calendar';
import styles from './Statistics.module.css';

class Statistics extends Component {
  componentDidMount() {
    this.props.toggleStatsPage();
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
