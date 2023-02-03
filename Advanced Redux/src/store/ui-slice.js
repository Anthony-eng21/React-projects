import { createSlice } from "@reduxjs/toolkit";

//looks like mutable code but toolkit uses a third party library to translate mutable code(this slice) to immutable pure functions
const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
