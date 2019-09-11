import React, { Component } from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import moment from "moment";
import configureStore from "./store";
import { addExpense } from "./actions/expenses";
import getFilteredExpenses from "./selectors/expensesSelector";

const store = configureStore();

store.dispatch(
  addExpense({
    note: "Water Bill",
    amount: 4000,
    createdAt: 0
  })
);
store.dispatch(
  addExpense({
    note: "Rent Bill",
    amount: 6000,
    createdAt: 0
  })
);
store.dispatch(
  addExpense({
    note: "Car EMI",
    amount: 15000,
    createdAt: 0
  })
);
const state = store.getState();
const visibleExpenses = getFilteredExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
