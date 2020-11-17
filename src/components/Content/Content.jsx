import React, { Suspense, Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Media from 'react-media';
import { CSSTransition } from 'react-transition-group';

import PrivateRoute from '../PrivateRoute.jsx';
import PublicRoute from '../PublicRoute.jsx';
import routes from '../../routes';
import Spinner from '../common/Spinner';
import Modal from '../common/Modal';
import NavMenu from '../NavMenu';

import { globalSelectors } from '../../redux/global/index.js';

import styles from './Content.module.css';
import fadeTransition from './transitions/fade.module.css';
import slideTransition from './transitions/slide.module.css';

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

        <CSSTransition
          in={this.props.showNavMenu}
          timeout={500}
          classNames={slideTransition}
          unmountOnExit
        >
          <NavMenu />
        </CSSTransition>
        {/* {this.props.showNavMenu && (
          <Media query="(max-width: 1239px)" render={() => <NavMenu />} />
        )} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showNavMenu: globalSelectors.getShowNavMenu(state),
});

export default connect(mapStateToProps)(Content);
