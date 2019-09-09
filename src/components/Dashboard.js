import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilters from "./ExpenseFilters";
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ExpenseFilters />
        <ExpenseList />
      </div>
    );
  }
}

export default Dashboard;
