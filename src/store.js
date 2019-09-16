import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import expensesReducer from "./reducers/expensesReducer";
import filtersReducer from "./reducers/filtersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
};
