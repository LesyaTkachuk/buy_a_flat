import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'moment/locale/ru.js';
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import styles from './Calendar.module.css';
import {
  transactionsActions,
  transactionsOperations,
} from '../../redux/transactions';

class Calendar extends Component {
  state = {
    date: new Date(),
    value: null,
  };
  onChange = (jsDate, dateString) => {
    const { setTransactionsDate, getDaylyTransactions } = this.props;

    setTransactionsDate(dateString);
    getDaylyTransactions();
  };

  resetState = () => this.setState({ value: null });

  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <DatePickerInput
            displayFormat="DD/MM/YYYY"
            returnFormat="YYYY-MM-DD"
            onChange={this.onChange}
            defaultValue={this.state.date}
            showOnInputClick
            minDate="2019-12-01"
            maxDate={this.state.date}
            locale="ru"
            className="my-custom-datepicker-component"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setTransactionsDate: transactionsActions.setTransactionsDate,
  getDaylyTransactions: transactionsOperations.getDailyTransactions,
};

export default connect(null, mapDispatchToProps)(Calendar);
