export const Reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};
