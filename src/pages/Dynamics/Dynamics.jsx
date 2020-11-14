import React from 'react';
import Chart from '../../components/Chart';
import Gift from '../../components/Gift';
import MonthlyStatistics from '../../components/MonthlyStatistics';
import ProgressInfo from '../../components/ProgressInfo/ProgressInfo';
import VisualizationApartment from '../../components/VisualizationApartment/VisualizationApartment';
import styles from './Dynamics.module.css';

export default function Dynamics() {
  return (
    <div className={styles.inner}>
      <div className={styles.part}>
        <Chart />

        <div className={styles.plan}>
          <MonthlyStatistics />
        </div>
      </div>

      <div className={styles.part}>
        <div className={styles.flex}>
          <div className={styles.progress}>
            <ProgressInfo />
          </div>

          <div className={styles.apartment}>
            <VisualizationApartment />
          </div>
        </div>

        <div className={styles.gift}>
          <Gift />
        </div>
      </div>
    </div>
  );
}
