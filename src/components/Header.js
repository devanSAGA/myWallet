import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header>
      <h1>myWallet</h1>
      <NavLink to="/" exact>
        Dashboard
      </NavLink>
      <NavLink to="/create">Create Expanse</NavLink>
      <NavLink to="/edit">Edit Expense</NavLink>
    </header>
  );
};

export default Header;
