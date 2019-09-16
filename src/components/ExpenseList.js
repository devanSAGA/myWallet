import React, { Component } from "react";
import { connect } from "react-redux";
import expensesSelector from "../selectors/expensesSelector";
import Expense from "./Expense";
import { startSetExpenses } from "../actions/expenses";

class ExpenseList extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props
      .startSetExpenses()
      .then(() => {
        this.setState({
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>
        {this.state.isLoading ? (
          <div className="list-item list-item--empty">
            <span>Loading...</span>
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: expensesSelector(state.expenses, state.filters)
  };
};

const mapDispatchToProps = dispatch => ({
  startSetExpenses: () => dispatch(startSetExpenses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList);
