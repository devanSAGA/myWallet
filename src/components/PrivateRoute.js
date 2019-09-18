import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

const PrivateRoute = ({
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
              <div>
                <Header />
                <Component {...props} />
              </div>
            ) : isAuthenticated === null ? (
              <Redirect to="/" />
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

export default connect(mapStateToProps)(PrivateRoute);
