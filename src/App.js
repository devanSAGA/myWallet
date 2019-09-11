import React, { Component } from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

// store.dispatch(
//   addExpense({
//     note: "Water Bill",
//     amount: 4000,
//     createdAt: 0
//   })
// );
// store.dispatch(
//   addExpense({
//     note: "Rent Bill",
//     amount: 6000,
//     createdAt: 0
//   })
// );
// store.dispatch(
//   addExpense({
//     note: "Car EMI",
//     amount: 15000,
//     createdAt: 0
//   })
// );
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
