import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/userAuthentication";

const Header = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link className="header__title" to="/" exact>
            <h1>myWallet</h1>
          </Link>
          <button class="button-text" onClick={props.startLogout}>
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
