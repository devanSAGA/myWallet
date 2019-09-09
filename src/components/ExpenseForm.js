import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.expense ? this.props.expense.note : "",
      description: this.props.expense ? this.props.expense.description : "",
      amount: this.props.expense ? this.props.expense.amount : "",
      createdAt: this.props.expense
        ? moment(this.props.expense.createdAt)
        : moment(),
      isCalendarFocused: false,
      error: ""
    };
  }

  handleNoteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };

  handleAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };

  handleDateChange = date => {
    this.setState({
      createdAt: date
    });
  };

  handleCalendarFocusChange = ({ focused }) => {
    this.setState({ isCalendarFocused: focused });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("handle submit called");
    if (!this.state.note || !this.state.amount) {
      this.setState({
        error: "Please fill expense title and amount to submit"
      });
    } else {
      const { description, note, amount, createdAt } = this.state;
      this.setState({ error: "" });
      this.props.onSubmit({
        description,
        note,
        amount: parseFloat(amount, 10),
        createdAt: createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.note}
            onChange={this.handleNoteChange}
            placeholder="Enter Expense Title"
            autoFocus
          />
          <input
            value={this.state.amount}
            onChange={this.handleAmountChange}
            placeholder="Enter Amount"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.isCalendarFocused}
            onFocusChange={this.handleCalendarFocusChange}
            id="ExpenseCreatedAt"
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            type="text"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            placeholder="Add Description"
          />
          <button type="submit" onClick={this.handleSubmit}>
            {this.props.submitButtonText}
          </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
