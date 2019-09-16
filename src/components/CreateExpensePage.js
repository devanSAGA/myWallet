import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpenseProcess } from "../actions/expenses";

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
            props.startAddExpenseProcess(expense);
            props.history.push("/");
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startAddExpenseProcess: expense => dispatch(startAddExpenseProcess(expense))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateExpansePage);
