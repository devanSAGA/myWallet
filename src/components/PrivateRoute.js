import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

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
            ) : (
              <Redirect to="/" />
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

export default connect(mapStateToProps)(PrivateRoute);
