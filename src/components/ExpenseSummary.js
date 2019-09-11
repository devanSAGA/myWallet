import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import expensesSelector from "../selectors/expensesSelector";
import totalExpenseSelector from "../selectors/totalExpenseSelector";

const ExpenseSummary = ({ noOfExpenses, totalExpense }) => {
  const expenseWord = noOfExpenses === 1 ? "expense" : "expenses";

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title">
          Showing <span>{noOfExpenses}</span> {expenseWord} totalling{" "}
          <span>{totalExpense} Rs.</span>
        </h1>
        <div className="page-header__action">
          <Link to="/create" className="button">
            Create Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = expensesSelector(state.expenses, state.filters);
  return {
    noOfExpenses: visibleExpenses.length,
    totalExpense: totalExpenseSelector(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
