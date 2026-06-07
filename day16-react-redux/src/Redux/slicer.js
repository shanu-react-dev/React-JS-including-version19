import { createSlice } from "@reduxjs/toolkit";

const CounterSlicers = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return (state += 1);
    },
    decrement: (state) => {
      return (state -= 1);
    },
  },
});

export const { increment, decrement } = CounterSlicers.actions;
export default CounterSlicers.reducer;
