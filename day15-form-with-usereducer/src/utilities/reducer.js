export let reducer = (state, action) => {
  console.log(state);
  console.log(action);
  return { ...state, [action.name]: action.value };
};
