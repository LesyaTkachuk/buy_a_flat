import React, { Component } from 'react';
import { connect } from 'react-redux';
import { familyOperations, familySelectors } from '../../redux/family';
import styles from './ProgressInfo.module.css';

const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const YEARS_TITLE = ['год', 'года', 'лет'];
const MONTHS_TITLE = ['месяц', 'месяца', 'месяцев'];

class ProgressInfo extends Component {
  componentDidMount() {
    this.props.getFinance();
  }

  render() {
    const { finance } = this.props;
    const years = Math.floor(finance?.monthsLeftToSaveForFlat / 12);
    const months = finance?.monthsLeftToSaveForFlat % 12;
    const width =
      (finance?.savingsInSquareMeters / finance?.totalSquareMeters) * 100;

    return (
      <>
        <p className={styles.total}>
          Через{' '}
          <strong>{`${years} ${declOfNum(
            years,
            YEARS_TITLE,
          )} ${months} ${declOfNum(months, MONTHS_TITLE)}`}</strong>
        </p>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.left}>Накоплено, %:</td>
              <td className={styles.right}>{finance?.savingsPercentage} %</td>
            </tr>
            <tr>
              <td className={styles.left}>Накоплено, грн:</td>
              <td className={styles.right}>{finance?.savingsValue} &#x20B4;</td>
            </tr>
            <tr>
              <td className={styles.left}>А это:</td>
              <td className={styles.right}>
                {finance?.savingsInSquareMeters} кв. м
              </td>
            </tr>
          </tbody>
        </table>

        <p className={styles.meters}>
          <span>{finance?.savingsInSquareMeters}</span> из{' '}
          <span>{finance?.totalSquareMeters} кв.м</span> накоплено
        </p>

        <div className={styles.line}>
          <div className={styles.progress} style={{ width: width + '%' }} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  finance: familySelectors.getFinance(state),
});

const mapDispatchToProps = {
  getFinance: familyOperations.getFinanceData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressInfo);
