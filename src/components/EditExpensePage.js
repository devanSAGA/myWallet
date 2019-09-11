import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

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
              this.props.dispatch(
                editExpense(this.props.selectedExpense.id, expense)
              );
              this.props.history.push("/");
            }}
          />
          <button
            className="button button__secondary"
            onClick={() => {
              this.props.dispatch(
                removeExpense({ id: this.props.selectedExpense.id })
              );
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

export default connect(mapStateToProps)(EditExpansePage);
