import React, { Component } from 'react';
import styles from './Expenses.module.css';
import ExpenseForm from '../../components/ExpenseForm';
import PrognosisExpense from '../../components/PrognosisExpense';

class ExpensesPage extends Component {
  componentDidMount() {
    this.props.toggleShowExpensesPage();
  }

  componentWillUnmount() {
    this.props.toggleShowExpensesPage();
  }
  render() {
    return (
      <div className={styles.container}>
        <ExpenseForm />
        <PrognosisExpense />
      </div>
    );
  }
}

export default ExpensesPage;
