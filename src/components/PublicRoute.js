import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      component={props => {
        return (
          <Fragment>
            {isAuthenticated ? (
              <Redirect to="/dashboard" />
            ) : (
              <Component {...props} />
            )}
          </Fragment>
        );
      }}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.userId
});

export default connect(mapStateToProps)(PublicRoute);
