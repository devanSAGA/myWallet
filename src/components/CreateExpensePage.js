import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const CreateExpansePage = props => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Create Expense</h1>
        </div>
      </div>
      <div className="container">
        <ExpenseForm
          submitButtonText="Create Expense"
          onSubmit={expense => {
            console.log(expense);
            props.dispatch(addExpense(expense));
            props.history.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default connect()(CreateExpansePage);
