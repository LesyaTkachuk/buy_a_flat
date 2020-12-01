import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';
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
    disabledInput: false,
    timout: null,
  };

  componentDidMount() {
    const { familyId, currentFamily } = this.props;
    if (familyId) {
      this.setState({
        family: currentFamily,
        disabledInput: true,
      });
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
    const name = e.target.name;
    const limit = e.target.dataset.limit;
    const value = e.target.value;
    if (value.length <= Number(limit) && Number(value) >= 0 && !isNaN(value)) {
      this.setState(prevState => ({
        family: { ...prevState.family, [name]: value },
      }));
    }
    if (this.formCheck()) {
      const debounceFunc = debounce(1000, this.formSubmit);
      debounceFunc();
    }
  };

  formCheck = () => {
    const {
      totalSalary,
      passiveIncome,
      flatPrice,
      flatSquareMeters,
      incomePercentageToSavings,
    } = this.state.family;
    let result;
    totalSalary *
      passiveIncome *
      flatPrice *
      flatSquareMeters *
      incomePercentageToSavings ===
      0 || NaN
      ? (result = false)
      : (result = true);
    return result;
  };

  formSubmit = () => {
    const { setFamily } = this.props;
    setFamily(this.state.family);
  };

  render() {
    return (
      <form>
        <div className={styles.planTable}>
          <div className={styles.leftWrapper}>
            <div className={styles.planTable__item}>
              <label>1. Основной доход, мес.</label>
              <input
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
      </form>
    );
  }
}

export default PlanForm;
