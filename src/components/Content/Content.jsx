import React, { Suspense, Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute.jsx';
import PublicRoute from '../PublicRoute.jsx';
import routes from '../../routes';
import Spinner from '../common/Spinner';
import Modal from '../common/Modal';
import styles from './Content.module.css';

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
      </div>
    );
  }
}

export default Content;
