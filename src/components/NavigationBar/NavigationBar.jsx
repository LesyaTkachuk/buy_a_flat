import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import styles from './NavigationBar.module.css';

class NavigationBar extends Component {
  render() {
    const { familyId } = this.props;
    return (
      <ul className={styles.navigationBar}>
        {routes.map(({ name, showInMenu, path, exact }, idx) => {
          if (showInMenu) {
            if (familyId) {
              return (
                <li key={name} className={styles.navigationItem}>
                  <NavLink
                    to={path}
                    exact={exact}
                    className={styles.navigationLink}
                    activeClassName={styles.activenavigationLink}
                  >
                    {showInMenu}
                  </NavLink>
                </li>
              );
            }

            if (!familyId && idx === 1) {
              return (
                <li key={name} className={styles.navigationItem}>
                  <NavLink
                    to={path}
                    exact={exact}
                    className={styles.navigationLink}
                    activeClassName={styles.activenavigationLink}
                  >
                    {showInMenu}
                  </NavLink>
                </li>
              );
            }

            return false;
          }
          return false;
        })}
      </ul>
    );
    // return (
    //   <ul className={styles.navigationBar}>
    //     {routes.map(
    //       ({ name, showInMenu, path, exact }) =>
    //         showInMenu && (
    //           <li key={name} className={styles.navigationItem}>
    //             <NavLink
    //               to={path}
    //               exact={exact}
    //               className={styles.navigationLink}
    //               activeClassName={styles.activenavigationLink}
    //             >
    //               {showInMenu}
    //             </NavLink>
    //           </li>
    //         ),
    //     )}
    //   </ul>
    // );
  }
}

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
});

export default connect(mapStateToProps)(NavigationBar);
