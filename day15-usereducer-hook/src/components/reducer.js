export const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  if (action.type === "incre") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  } else if (action.type === "reset") {
    return (state = 0);
  }
};
