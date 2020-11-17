import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import LogoutButton from '../LogoutButton';
import styles from './NavMenu.module.css';

class NavMenu extends Component {
  render() {
    const { familyId } = this.props;
    return (
      <div className={styles.wrapper}>
        <ul className={styles.navMenu}>
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
        <div className={styles.btnWrapper}>
          <LogoutButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
});

export default connect(mapStateToProps)(NavMenu);
