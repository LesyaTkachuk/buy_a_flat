import React, { Component } from 'react';
import delIco from '../../assets/icons/del.svg';
import editIco from '../../assets/icons/edit.svg';
import styles from './StatisticsLists.module.css';

const list = [
  {
    id: 1,
    data: '12.09.2020',
    category: 'Корм для кота',
    price: '100 грн.',
    block: 'Дом',
  },
  {
    id: 2,
    data: '12.09.2020',
    category: 'Подарок на ДР',
    price: '2000 грн.',
    block: 'Другое',
  },
  {
    id: 3,
    data: '12.09.2020',
    category: 'Чайник',
    price: '500 грн.',
    block: 'Дом',
  },
  {
    id: 4,
    data: '12.09.2020',
    category: 'Продукты',
    price: '4000 грн.',
    block: 'Продукты',
  },
  {
    id: 5,
    data: '12.09.2020',
    category: 'Шапка',
    price: '800 грн.',
    block: 'Одежда и обувь',
  },
];

const category = [
  {
    id: 1,
    block: 'Продукты',
    price: '-2000 грн.',
    percent: '20%',
  },
  {
    id: 2,
    block: 'Одежда и обувь',
    price: '-1500 грн.',
    percent: '10%',
  },
  {
    id: 3,
    block: 'Кафе и ресторані',
    price: '-3500 грн.',
    percent: '10%',
  },
  {
    id: 4,
    block: 'Красота и медицина',
    price: '-5500 грн.',
    percent: '10%',
  },
  {
    id: 5,
    block: 'Здоровье',
    price: '-5500 грн.',
    percent: '10%',
  },
  {
    id: 6,
    block: 'Транспорт',
    price: '-5500 грн.',
    percent: '10%',
  },
  {
    id: 7,
    block: 'Дом',
    price: '-5500 грн.',
    percent: '10%',
  },
  {
    id: 8,
    block: 'Другое',
    price: '-5500 грн.',
    percent: '10%',
  },
];

const tabs = ['Список', 'Категории'];

class StatisticsLists extends Component {
  constructor(props) {
    super(props);

    this.toggleClass = this.toggleClass.bind(this);

    this.state = { activeTab: true };
  }

  toggleClass() {
    const currentState = this.state.activeTab;
    this.setState({ activeTab: !currentState });
  }

  render() {
    let activeTab = this.state.activeTab;
    return (
      <div>
        <div>
          <button
            onClick={this.toggleClass}
            className={
              !activeTab ? styles.btnTab : styles.btnTab + ' ' + styles.active
            }
          >
            {tabs[0]}
          </button>
          <button
            onClick={this.toggleClass}
            className={
              activeTab ? styles.btnTab : styles.btnTab + ' ' + styles.active
            }
          >
            {tabs[1]}
          </button>
        </div>
        <div>
          <table className={styles.table}>
            <tbody>
              {activeTab
                ? list.map(item => (
                    <tr className={styles.line}>
                      <td>{item.data}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>{item.block}</td>
                      <td>
                        <div>
                          <div className={styles.btnBlock}>
                            <img
                              className={styles.btnIco}
                              src={editIco}
                              alt={'Редактировать'}
                            />
                          </div>
                          <div className={styles.btnBlock}>
                            <img
                              className={styles.btnIco}
                              src={delIco}
                              alt={'Удалить'}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                : category.map(item => (
                    <tr className={styles.line}>
                      <td>{item.block}</td>
                      <td>{item.price}</td>
                      <td>{item.percent}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StatisticsLists;
