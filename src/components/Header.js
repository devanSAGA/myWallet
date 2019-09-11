import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link className="header__title" to="/" exact>
            <h1>myWallet</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
