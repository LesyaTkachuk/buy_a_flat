import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import {
  familyActions,
  familyOperations,
  familySelectors,
} from '../../redux/family';
import { globalActions } from '../../redux/global';
import styles from './PrognosisBuy.module.css';
import { Link } from 'react-router-dom';

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

class PrognosisBuy extends Component {
  componentDidMount() {
    const { countMonthsLeft, countYearsLeft, familyId } = this.props;
    if (familyId) {
      countMonthsLeft(this.leftYearMonth());
      countYearsLeft(this.leftYearMonth());
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.family === this.props.family) {
      return;
    }

    const { countMonthsLeft, countYearsLeft } = this.props;
    if (this.props.familyId) {
      countMonthsLeft(this.leftYearMonth());
      countYearsLeft(this.leftYearMonth());
    }
  }

  leftYearMonth = () => {
    const {
      totalSalary,
      passiveIncome,
      balance,
      flatPrice,
      incomePercentageToSavings,
    } = this.props.family;
    const allIncome = Number(totalSalary) + Number(passiveIncome);
    const incomForMonth = (allIncome * Number(incomePercentageToSavings)) / 100;
    const leftToAcc = Number(flatPrice) - Number(balance);
    const monthsLeft = leftToAcc / incomForMonth;
    let years = Math.floor(monthsLeft / 12);
    let months = Math.ceil(monthsLeft % 12);
    if (months === 12) {
      years += 1;
      months = 0;
    }
    return { months, years };
  };

  handleClick = () => {
    const { addFamily, updateFamily, familyId, family } = this.props;

    const {
      flatPrice,
      flatSquareMeters,
      totalSalary,
      passiveIncome,
      incomePercentageToSavings,
    } = family;

    if (familyId) {
      updateFamily({
        flatPrice,
        flatSquareMeters,
        totalSalary,
        passiveIncome,
        incomePercentageToSavings,
      });
    } else {
      if (totalSalary) {
        addFamily(family);
      }
    }
  };

  render() {
    const { yearsLeft, monthsLeft, familyId } = this.props;
    return (
      <div className={styles.componentBlock}>
        <div className={styles.contentWrapper}>
          <p className={styles.title}>У вас будет квартира через:</p>
          <div className={styles.innerWrapper}>
            <div className={styles.borderBox}>
              <span className={styles.borderText}>Кол-во лет</span>
              <span className={styles.valueBox}>{`${yearsLeft}  ${declOfNum(
                yearsLeft,
                YEARS_TITLE,
              )}`}</span>
            </div>
            <div className={styles.borderBox}>
              <span className={styles.borderText}>Кол-во месяцев</span>
              <span className={styles.valueBox}>{`${monthsLeft} ${declOfNum(
                monthsLeft,
                MONTHS_TITLE,
              )}`}</span>
            </div>
            <div>
              {familyId ? (
                <Link
                  to="/expenses"
                  className={styles.button}
                  onClick={this.handleClick}
                >
                  Подходит
                </Link>
              ) : (
                <button className={styles.button} onClick={this.handleClick}>
                  Подходит
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
  family: familySelectors.getFamilyInfo(state),
  monthsLeft: familySelectors.getMonthsLeft(state),
  yearsLeft: familySelectors.getYearsLeft(state),
});

const mapDispatchToProps = {
  addFamily: familyOperations.addFamily,
  updateFamily: familyOperations.updateFamily,
  getCurrentUser: authOperations.getCurrentUser,
  countMonthsLeft: familyActions.countMonthsLeft,
  countYearsLeft: familyActions.countYearsLeft,
  togglePlanBtnActive: globalActions.togglePlanBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisBuy);
