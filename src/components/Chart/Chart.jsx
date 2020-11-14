import React, { Component, createRef } from 'react';
import Media from 'react-media';
import Chart from 'chart.js';
import styles from './Chart.module.css';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const COLORS = ['#7C9AF2', '#FF6C00', '#D7D8DD'];
const LEGEND = ['Доходы', 'Расходы', 'Накоплено'];
const TYPE = {
  desctop: 'bar',
  mobile: 'horizontalBar',
};
const SCALES = labels => ({
  desctop: {
    xAxes: [
      {
        type: 'category',
        stacked: false,
        circular: false,
        gridLines: {
          display: false,
        },
        labels,
      },
    ],
    yAxes: [
      {
        stacked: false,
        gridLines: {
          offsetGridLines: true,
          lineWidth: 1,
          borderDash: [8, 10],
        },
      },
    ],
  },
  mobile: {
    yAxes: [
      {
        type: 'category',
        stacked: false,
        circular: false,
        gridLines: {
          display: false,
        },
        labels,
      },
    ],
    xAxes: [
      {
        stacked: false,
        position: 'top',
        gridLines: {
          offsetGridLines: true,
          lineWidth: 1,
          borderDash: [8, 10],
        },
      },
    ],
  },
});

class MyChart extends Component {
  chartRef = createRef(null);

  state = {
    instance: null,
  };

  componentDidMount() {
    if (this.props.data) this.createChart();
  }

  componentDidUpdate(prevProps) {
    const { media, data } = this.props;

    if (JSON.stringify(prevProps.data) !== JSON.stringify(data))
      this.createChart();
    if (prevProps.media !== media) this.createChart();
  }

  createChart = () => {
    if (!this.chartRef.current) return;
    const ctx = this.chartRef.current.getContext('2d');
    if (this.state.instance) this.state.instance.destroy();
    const { media, data } = this.props;

    const incomeAmount = data?.map(item => item.incomeAmount);
    const expenses = data?.map(item => item.expenses);
    const savings = data?.map(item => item.savings);
    const labels = data?.map(item => MONTHS[item.month - 1]);

    const instance = new Chart(ctx, {
      type: TYPE[media],
      data: {
        datasets: [
          {
            backgroundColor: COLORS[0],
            maxBarThickness: 5,
            barPercentage: 1,
            categoryPercentage: 0.6,
            data: incomeAmount,
          },
          {
            backgroundColor: COLORS[1],
            maxBarThickness: 5,
            barPercentage: 1,
            categoryPercentage: 0.6,
            data: expenses,
          },
          {
            backgroundColor: COLORS[2],
            maxBarThickness: 5,
            barPercentage: 1,
            categoryPercentage: 0.6,
            data: savings,
          },
        ],
      },
      options: {
        aspectRatio: media === 'mobile' ? 0.45 : 1.55,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            title(e) {
              return LEGEND[e[0].index];
            },
            afterTitle(e) {
              return data[e[0].index]._id;
            },
            label(e) {
              return ` ${e.value} грн`;
            },
          },
        },
        scales: SCALES(labels)[media],
      },
    });

    this.setState({ instance });
  };

  render() {
    return (
      <>
        <h2 className={styles.title}>Динамика расходов и накоплений</h2>
        <ul className={styles.legend}>
          {LEGEND.map(item => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
        <canvas ref={this.chartRef} />
      </>
    );
  }
}

export default function MediaChart(props) {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {matches => (
        <MyChart media={matches.mobile ? 'mobile' : 'desctop'} {...props} />
      )}
    </Media>
  );
}
