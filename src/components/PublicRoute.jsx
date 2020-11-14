import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from './hoc/withAuth';

function PublicRoute({ component: Component, isAuthenticated, ...routeProps }) {
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/planning" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default withAuth(PublicRoute);
