import React from 'react';
import styles from './PrognosisExpense.module.css';

const PrognosisExpense = ({
  transaction,
  dayLimit,
  monthLimit,
  createTransaction,
  setExpenseBtnActive,
  isExpenseBtnActive,
}) => {
  const handleClick = () => {
    const { id, ...transactionToSend } = transaction;
    createTransaction(transactionToSend);
    setExpenseBtnActive();
  };
  return (
    <div className={styles.wrp}>
      <div className={styles.inner}>
        <p className={styles.value}>{dayLimit} &#x20B4;</p>
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

export default PrognosisExpense;
