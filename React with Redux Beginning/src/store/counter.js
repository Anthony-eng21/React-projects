import { createSlice } from '@reduxjs/toolkit'

//this initial state is specific to this slice 
const initialCounterState = { counter: 0, showCounter: true };
//reducer logic with tool kit 🤯
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //the extra action data dispatched default's param name is payload on the dispatch fn) call
      state.counter = state.counter + action.payload * 42;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;