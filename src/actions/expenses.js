import database from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpenseProcess = (expense = {}) => {
  console.log("from startAddExpenseProcess");
  return dispatch => {
    const { description = "", note = "", amount = 0, createdAt = 0 } = expense;
    const expenseObject = {
      description,
      note,
      amount,
      createdAt
    };
    database
      .ref("expenses")
      .push(expenseObject)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expenseObject
          })
        );
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return dispatch => {
    database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(
          removeExpense({
            id
          })
        );
      });
  };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

//FETCH EXPENSES
export const setExpenses = expenses => {
  return { type: "SET_EXPENSES", expenses };
};

export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref("expenses")
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
