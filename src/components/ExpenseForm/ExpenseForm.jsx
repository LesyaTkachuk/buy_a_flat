import React, { Component } from 'react';
import Calculator from '../Calculator';
import styles from './ExpenseForm.module.css';

class ExpensesForm extends Component {
  state = {
    transaction: {
      comment: '',
      category: '',
      amount: '',
    },
  };

  componentDidMount() {
    const {
      monthBalance,
      transactionCategories,
      getCategories,
      getMonthBalance,
    } = this.props;

    // if (familyBalance) {
    //   this.setState({
    //     balance: familyBalance,
    //   });
    // }
    if (!monthBalance) {
      getMonthBalance();
    }

    if (transactionCategories.length === 0) {
      getCategories();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { transactionAmount } = this.props;
    if (transactionAmount !== prevProps.transactionAmount) {
      this.setState({
        transaction: {
          ...prevState.transaction,
          amount: transactionAmount,
        },
      });
    }
  }

  handleInput = e => {
    const { name, value } = e.target;
    const limit = e.target.dataset.limit;

    if (value.length <= Number(limit)) {
      this.setState(prevState => ({
        transaction: { ...prevState.transaction, [name]: value },
      }));
    }

    if (this.props.isExpenseBtnActive) {
      this.props.setExpenseBtnActive();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setTransaction(this.state.transaction);
    this.props.setExpenseBtnActive();
  };

  render() {
    const { transaction } = this.state;

    const {
      transactionCategories,
      setCalculatorOpen,
      isCalculatorOpen,
      isExpenseBtnActive,
      monthBalance,
    } = this.props;

    return (
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="monthBalance">
              Сумма на счету
            </label>
            <input
              className={styles.formInput}
              type="number"
              name="monthBalance"
              id="monthBalance"
              value={monthBalance}
              readOnly
            />
            {/* <label className={styles.formLabel} htmlFor="account">
              Остаток на счете:
            </label> */}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="comment">
              Комментарий
            </label>
            <input
              className={styles.formInput}
              type="text"
              name="comment"
              id="comment"
              data-limit="40"
              value={transaction.comment}
              onChange={this.handleInput}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="category">
              На категорию
            </label>
            <select
              className={styles.formInput}
              name="category"
              id="category"
              data-limit="40"
              value={transaction.category}
              onChange={this.handleInput}
            >
              <option value="select">Выберите категорию...</option>
              {transactionCategories &&
                transactionCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="amount">
              Сумма
            </label>
            <input
              className={styles.formInput}
              type="number"
              name="amount"
              id="amount"
              data-limit="6"
              value={transaction.amount}
              onChange={this.handleInput}
              placeholder="00.00"
            />
            <span
              className={styles.calculatorIcon}
              onClick={() => setCalculatorOpen()}
            ></span>
          </div>
        </form>
        {isCalculatorOpen && (
          <div className={styles.calculatorWrapper}>
            <Calculator />
          </div>
        )}
        <button
          type="submit"
          disabled={isExpenseBtnActive}
          className={styles.formButton}
          onClick={this.handleSubmit}
        >
          Раcсчитать
        </button>
      </div>
    );
  }
}

export default ExpensesForm;
