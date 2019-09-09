import { combineReducers, createStore } from "redux";
import expensesReducer from "./reducers/expensesReducer";
import filtersReducer from "./reducers/filtersReducer";

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

export default () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
