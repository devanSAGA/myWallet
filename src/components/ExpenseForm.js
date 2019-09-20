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
      <form className="form" onSubmit={this.handleSubmit}>
        {this.state.error ? (
          <p className="form__error">{this.state.error}</p>
        ) : null}
        <input
          type="text"
          className="text-input"
          value={this.state.note}
          onChange={this.handleNoteChange}
          placeholder="Enter Expense Title"
          autoFocus
        />
        <input
          type="text"
          className="text-input"
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
          isOutsideRange={day => moment().diff(day) < 0}
          hideKeyboardShortcutsPanel={true}
          readOnly={true}
        />
        <textarea
          type="text"
          className="textarea"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          placeholder="Add Description"
        />
        <div>
          <button className="button" type="submit" onClick={this.handleSubmit}>
            {this.props.submitButtonText}
          </button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
