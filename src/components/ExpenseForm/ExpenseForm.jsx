import React, { Component } from 'react';
import Calculator from '../Calculator';
import styles from './ExpenseForm.module.css';
// import { apiUrl } from '../../services/api';
// import Select from 'react-select';
// import EdiExpense from '../EditExpense';

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

    // const options = [];

    // transactionCategories.map(category =>
    //   options.push({
    //     value: category.name,
    //     label: category.name,
    //     icon: category.icon,
    //   }),
    // );

    // const customSingleValue = ({ data }) => (
    //   <div className="input-select">
    //     <div className="input-select__single-value">
    //       {data.icon && (
    //         <span
    //           className="input-select__icon"
    //           style={{
    //             background: `url(${apiUrl}${data.icon})`,
    //             width: `18px`,
    //             height: `18px`,
    //             display: `block`,
    //             content: `''`,
    //             position: `absolute`,
    //           }}
    //         >
    //           {/* {`${apiUrl}
    //           ${data.icon}`} */}
    //         </span>
    //       )}
    //       <span style={{ paddingLeft: `24px` }}>{data.label}</span>
    //     </div>
    //   </div>
    // );

    return (
      <div className={styles.formContainer}>
        {/* <h2 className={styles.title}>Внесите новые расходы:</h2> */}
        <form className={styles.form}>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="monthBalance">
              Остаток средств
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
            {/* <input
              // type="text"
              name="category"
              // list="categories"
              placeholder="Выберите категорию..."
              className={styles.formInput}
              value={transaction.category}
              onChange={this.handleInput}
              // onClick={}
            />
            <ul
              className={styles.categoryList}
              name="categories"
              id="categories"
              data-limit="40"
              value={transaction.category}
              onChange={this.handleInput}
            >
              {/* <li className={styles.categorySelect}> Выберите категорию...</li>  }
              {transactionCategories &&
                transactionCategories.map(category => (
                  <li
                    className={styles.category}
                    key={category.name}
                    value={category.name}
                    style={{
                      position: `relative`,
                      backgroundImage: `url(${apiUrl}${category.icon})`,
                      top: `12px`,
                      left: `12px`,
                      // width: `18px`,
                      // height: `18px`,
                      backgroundRepeat: `no-repeat`,
                    }}
                  >
                    {category.name}
                  </li>
                ))}
            </ul> */}

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
                  <option
                    className={styles.option}
                    key={category.name}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))}
            </select>

            {/* <Select
              className={styles.formInput}
              placeholder="Выберите категорию..."
              options={options}
              сomponents={{ SingleValue: customSingleValue, apiUrl: apiUrl }}
            /> */}
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
        {/* <div>
          <EdiExpense />
        </div> */}
      </div>
    );
  }
}

export default ExpensesForm;
