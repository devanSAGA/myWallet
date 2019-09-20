import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarFocused: null
    };
  }

  handleCalendarFocusChange = focused => {
    this.setState({
      isCalendarFocused: focused
    });
  };

  handleDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              value={this.props.filters.text}
              onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
            />
          </div>

          <div className="input-group__item">
            <select
              className="dropdown"
              value={this.props.filters.sortBy}
              onChange={e => {
                if (e.target.value === "date") {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === "amount") {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="startDateLimit"
              endDate={this.props.filters.endDate}
              endDateId="endDateLimit"
              onDatesChange={this.handleDateChange}
              focusedInput={this.state.isCalendarFocused}
              onFocusChange={this.handleCalendarFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseFilters);
