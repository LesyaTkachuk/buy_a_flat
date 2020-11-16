import React, { Suspense, Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Media from 'react-media';
import PrivateRoute from '../PrivateRoute.jsx';
import PublicRoute from '../PublicRoute.jsx';
import routes from '../../routes';
import Spinner from '../common/Spinner';
import Modal from '../common/Modal';
import styles from './Content.module.css';
import { globalSelectors } from '../../redux/global/index.js';
import NavMenu from '../NavMenu';

class Content extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Suspense
          fallback={
            <Modal>
              <Spinner />
            </Modal>
          }
        >
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              ),
            )}
            <Redirect to="/" />
          </Switch>
        </Suspense>
        {this.props.showNavMenu && (
          <Media query="(max-width: 1239px)" render={() => <NavMenu />} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showNavMenu: globalSelectors.getShowNavMenu(state),
});

export default connect(mapStateToProps)(Content);
