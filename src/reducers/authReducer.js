export default (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        userId: action.userId
      };
    case "LOG_OUT":
      return {
        userId: null
      };
    default:
      return state;
  }
};
