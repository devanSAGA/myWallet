const expensesDefaultState = [];

export default expensesReducer = (state = expensesDefaultState, action) {
  switch(action.type) {
    case: ADD_EXPENSE
      return [
        ...state,
        action.expense
      ]
    case: REMOVE_EXPENSE
      return state.filter((expense) => expense.id !== action.id)
    case: EDIT_EXPENSE
      return state //write edit expense reducer logic here.
    default
      return state;
  }
};
