import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/userAuthentication";
import GoogleLogo from "../assets/search.svg";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <div className="left-half">
          <div className="login-page-header">
            <h1 className="main-heading">myWallet</h1>
            <h3 className="sub-heading">Track your expenses with ease!</h3>
          </div>
          <div className="login-buttons">
            <button
              className="google-signin-button"
              onClick={this.props.startLogin}
            >
              <img
                className="google-signin-button--logo"
                alt="google-logo"
                src={GoogleLogo}
              />
              <span className="google-signin-button--text">
                Login With Google
              </span>
            </button>
          </div>
        </div>
        <div className="right-half"></div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
