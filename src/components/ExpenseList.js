import React from "react";
import { connect } from "react-redux";
import expensesSelector from "../selectors/expensesSelector";
import Expense from "./Expense";

const ExpenseList = props => {
  const { expenses } = props;
  return (
    <div>
      {expenses.map(expense => {
        return <Expense {...expense} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: expensesSelector(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
