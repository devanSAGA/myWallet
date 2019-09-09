import moment from "moment";

export default (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses
    .filter(expense => {
      const createdAtInMomentFormat = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtInMomentFormat)
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtInMomentFormat)
        : true;
      const textMatch =
        expense.description.toLowerCase().includes(text.toLowerCase()) ||
        expense.note.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((expenseA, expenseB) => {
      if (sortBy === "amount") {
        //The expenses with bigger amount should come first
        return expenseA.amount >= expenseB.amount ? -1 : 1;
      } else if (sortBy === "date") {
        //The more recent expenses should come first
        return expenseA.createdAt >= expenseB.createdAt ? -1 : 1;
      } else {
        return -1;
      }
    });
};
