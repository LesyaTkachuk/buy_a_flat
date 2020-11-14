import React from 'react';
import { connect } from 'react-redux';
import { familySelectors } from '../../redux/family';
import styles from './VisualizationApartment.module.css';
import flat from '../../assets/images/plan.png';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const VisualizationApartment = ({ finance }) => {
  const date = new Date();
  const end = new Date(
    date.setMonth(date.getMonth() + finance.monthsLeftToSaveForFlat),
  );
  const width =
    (finance?.savingsInSquareMeters / finance?.totalSquareMeters) * 100;

  return (
    <>
      <p className={styles.end}>
        {MONTHS[end.getMonth()]} {end.getFullYear()}
      </p>
      <div className={styles.wrp}>
        <div className={styles.progress} style={{ width: width + '%' }} />
        <img className={styles.img} src={flat} alt="" />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  finance: familySelectors.getFinance(state),
});

export default connect(mapStateToProps)(VisualizationApartment);
