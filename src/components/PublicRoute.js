import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loader from "../components/Loader";

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
            ) : isAuthenticated === null ? (
              <Component {...props} />
            ) : (
              <Loader />
            )}
          </Fragment>
        );
      }}
    />
  );
};

const mapStateToProps = state => {
  let isAuthenticated = false;
  if (state.auth.userId === null) {
    isAuthenticated = null;
  } else if (!!state.auth.userId) {
    isAuthenticated = true;
  }
  return {
    isAuthenticated
  };
};

export default connect(mapStateToProps)(PublicRoute);
