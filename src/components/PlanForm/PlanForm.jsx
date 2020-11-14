import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import {
  familyActions,
  familyOperations,
  familySelectors,
} from '../../redux/family';
import { globalActions, globalSelectors } from '../../redux/global';
import styles from './PlanForm.module.css';

class PlanForm extends Component {
  state = {
    family: {
      totalSalary: '',
      passiveIncome: '',
      balance: '',
      flatPrice: '',
      flatSquareMeters: '',
      incomePercentageToSavings: '',
    },
    disabledButton: false,
    disabledInput: false,
    timout: null,
  };

  componentDidMount() {
    const { familyId, currentFamily, togglePlanBtnActive } = this.props;
    if (familyId) {
      this.setState({
        family: currentFamily,

        disabledInput: true,
      });
      togglePlanBtnActive();
    }
  }

  componentDidUpdate(prevProps) {
    const { currentFamily } = this.props;
    if (prevProps?.currentFamily?.totalSalary === currentFamily.totalSalary)
      return;

    this.setState({
      family: currentFamily,
      disabledInput: true,
    });
  }

  handleInput = e => {
    const { togglePlanBtnActive, isPlanButtonActive } = this.props;
    const name = e.target.name;
    const limit = e.target.dataset.limit;
    const value = e.target.value;
    if (value.length <= Number(limit) && Number(value) >= 0) {
      this.setState(prevState => ({
        family: { ...prevState.family, [name]: value },
      }));
    }
    if (isPlanButtonActive) {
      togglePlanBtnActive();
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { setFamily, togglePlanBtnActive } = this.props;
    setFamily(this.state.family);
    togglePlanBtnActive();
  };

  render() {
    const { isPlanButtonActive } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className={styles.planTable}>
          <div className={styles.leftWrapper}>
            <div className={styles.planTable__item}>
              <label>1. Основной доход, мес.</label>
              <input
                required
                data-limit="6"
                name="totalSalary"
                type="number"
                value={this.state.family.totalSalary}
                onChange={this.handleInput}
              />
            </div>
            <div className={styles.planTable__item}>
              <label>2. Пассивные доходы, мес.</label>
              <input
                required
                name="passiveIncome"
                data-limit="6"
                type="number"
                value={this.state.family.passiveIncome}
                onChange={this.handleInput}
              />
            </div>
            <div className={styles.planTable__item}>
              <label>3. Сбережения</label>
              <input
                required
                data-limit="9"
                name="balance"
                type="number"
                value={this.state.family.balance}
                onChange={this.handleInput}
                disabled={this.state.disabledInput}
              />
            </div>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.planTable__item}>
              <label>4. Укажите стоимость вашей будущей квартиры</label>
              <input
                required
                data-limit="10"
                name="flatPrice"
                type="number"
                value={this.state.family.flatPrice}
                onChange={this.handleInput}
              />
            </div>
            <div className={styles.planTable__item}>
              <label>5. Укажите кол-во кв. м. вашей будущей квартиры</label>
              <input
                required
                data-limit="4"
                name="flatSquareMeters"
                type="number"
                value={this.state.family.flatSquareMeters}
                onChange={this.handleInput}
              />
            </div>
            <div className={styles.planTable__item}>
              <label>6. Накопление, %</label>
              <input
                required
                data-limit="2"
                name="incomePercentageToSavings"
                type="number"
                value={this.state.family.incomePercentageToSavings}
                onChange={this.handleInput}
              />
            </div>
            <p className={styles.planTable__text}>
              Укажите процент, который бы хотели накапливать в месяц от общей
              суммы доходов и вы увидите, когда достигните цели
            </p>
          </div>
        </div>
        <button
          type="submit"
          disabled={isPlanButtonActive}
          className={styles.planTable__button}
        >
          Раcсчитать
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
  currentFamily: familySelectors.getFamilyInfo(state),
  isPlanButtonActive: globalSelectors.getIsPlanBtnActive(state),
});

const mapDispatchToProps = {
  getFamily: familyOperations.getCurrentFamily,
  setFamily: familyActions.updateOrSetFamily,
  togglePlanBtnActive: globalActions.togglePlanBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanForm);
