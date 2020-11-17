import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { CSSTransition } from 'react-transition-group';
import NavMenu from '../../NavMenu';
import { globalSelectors } from '../../../redux/global/index.js';
import styles from './Layout.module.css';
import fadeTransition from './transitions/fade.module.css';
import slideTransition from './transitions/slide.module.css';

class Layout extends React.Component {
  defineClass = () => {
    const { showExpensesPage, showStatsPage } = this.props;
    if (showExpensesPage) {
      return styles.containerExpenses;
    } else if (showStatsPage) {
      return styles.containerStats;
    } else {
      return styles.container;
    }
  };
  render() {
    const { children } = this.props;
    return (
      <div className={this.defineClass()}>
        {children}
        <CSSTransition
          in={this.props.showNavMenu}
          timeout={500}
          classNames={fadeTransition}
          unmountOnExit
        >
          <Media query="(max-width: 1239px)" render={() => <NavMenu />} />
        </CSSTransition>
      </div>
    );
  }

  // return getShowExpensesPage ? (
  //   <div className={styles.containerExpense}>{children}</div>
  // ) : (
  //   <div> {children}</div>
  // );
}

Layout.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = state => ({
  showNavMenu: globalSelectors.getShowNavMenu(state),
});

export default connect(mapStateToProps)(Layout);
