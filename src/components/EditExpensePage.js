import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

class EditExpansePage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            expense={this.props.selectedExpense}
            submitButtonText="Edit Expense"
            onSubmit={expense => {
              this.props.startEditExpense(
                this.props.selectedExpense.id,
                expense
              );
              this.props.history.push("/");
            }}
          />
          <button
            className="button button__secondary"
            onClick={() => {
              this.props.startRemoveExpense({
                id: this.props.selectedExpense.id
              });
              this.props.history.push("/");
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    selectedExpense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => ({
  startEditExpense: (expenseId, expense) =>
    dispatch(startEditExpense(expenseId, expense)),
  startRemoveExpense: expenseId => dispatch(startRemoveExpense(expenseId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpansePage);
