import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "./reducers/expensesReducer";
import filtersReducer from "./reducers/filtersReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  auth: authReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
};
