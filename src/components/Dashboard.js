import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilters from "./ExpenseFilters";
import ExpenseSummary from "./ExpenseSummary";
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ExpenseSummary />
        <ExpenseFilters />
        <ExpenseList />
      </div>
    );
  }
}

export default Dashboard;
