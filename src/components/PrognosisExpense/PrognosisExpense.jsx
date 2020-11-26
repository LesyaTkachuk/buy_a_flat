import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';
import { familySelectors } from '../../redux/family';
import styles from './PrognosisExpense.module.css';
import { globalActions, globalSelectors } from '../../redux/global';

const PrognosisExpense = ({
  transaction,
  transactionAmount,
  info,
  createTransaction,
  setExpenseBtnActive,
  isExpenseBtnActive,
  monthBalance,
}) => {
  const daysToMonthEnd = moment().daysInMonth() - new Date().getDate() + 1;

  // const income = info.totalSalary + info.passiveIncome;
  const available =
    (monthBalance * (100 - info.incomePercentageToSavings)) / 100;
  const dailySum = available / daysToMonthEnd;

  const dailyLimit = (dailySum - Number(transactionAmount)).toFixed(2);
  const monthLimit = (available - Number(transactionAmount)).toFixed(2);

  console.log(transactionAmount);
  console.log(monthBalance);

  const handleClick = () => {
    createTransaction(transaction);
    setExpenseBtnActive();
  };
  return (
    <div className={styles.wrp}>
      <div className={styles.inner}>
        <p className={styles.value}>{dailyLimit} &#x20B4;</p>
        <p className={styles.small}>Лимит на день</p>
      </div>

      <div className={styles.inner}>
        <p className={styles.value}>{monthLimit} &#x20B4;</p>
        <p className={styles.small}>Отклонение от плановой суммы накопления</p>
      </div>

      <button
        disabled={!isExpenseBtnActive}
        className={styles.btn}
        onClick={handleClick}
        type="button"
      >
        Готово
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  monthBalance: transactionsSelectors.getMonthBalance(state),
  transactionAmount: transactionsSelectors.getTransactionAmount(state),
  transaction: transactionsSelectors.getTransaction(state),
  info: familySelectors.getFamilyInfo(state),
  isExpenseBtnActive: globalSelectors.getIsExpenseBtnActive(state),
});

const mapDispatchToProps = {
  createTransaction: transactionsOperations.createTransaction,
  setExpenseBtnActive: globalActions.toggleExpenseBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisExpense);
