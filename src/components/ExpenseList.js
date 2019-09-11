import React from "react";
import { connect } from "react-redux";
import expensesSelector from "../selectors/expensesSelector";
import Expense from "./Expense";

const ExpenseList = props => {
  const { expenses } = props;
  return (
    <div className="container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {expenses.length === 0 ? (
          <div className="list-item list-item--empty">
            <span>No expenses.</span>
          </div>
        ) : (
          expenses.map(expense => {
            return <Expense key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: expensesSelector(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
