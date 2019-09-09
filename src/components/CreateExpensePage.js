import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const CreateExpansePage = props => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        submitButtonText="Add Expense"
        onSubmit={expense => {
          console.log(expense);
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(CreateExpansePage);
