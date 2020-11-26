import React, { Component } from 'react';
import styles from './EditExpense.module.css';

class EditExpense extends Component {
  state = {
    transaction: {
      comment: '',
      category: '',
      amount: '',
    },
  };

  componentDidMount() {
    const { transactionCategories, getCategories } = this.props;

    console.log(transactionCategories);
    // if (familyBalance) {
    //   this.setState({
    //     balance: familyBalance,
    //   });
    // }

    if (transactionCategories.length === 0) {
      getCategories();
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

    // if (this.props.isExpenseBtnActive) {
    //   this.props.setExpenseBtnActive();
    // }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setTransaction(this.state.transaction);
    // this.props.setExpenseBtnActive();
  };

  render() {
    const { transaction } = this.state;

    const {
      transactionCategories,
      //   isExpenseBtnActive,
    } = this.props;

    return (
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="comment">
              Статья расходов
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
              Категория
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
          </div>
          <button
            type="submit"
            // disabled={isExpenseBtnActive}
            className={styles.formButton}
            onClick={this.handleSubmit}
          >
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

export default EditExpense;
