import React, { Component } from 'react';
import 'moment/locale/ru.js';
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import styles from './Calendar.module.css';

class Calendar extends Component {
  state = {
    date: new Date(),
    value: null,
  };
  onChange = (jsDate, dateString) => {
    console.log(jsDate);
    console.log(dateString);
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
            small="true"
            // startMode="month"
            //   value="2019-12-01"
            className="my-custom-datepicker-component"
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
