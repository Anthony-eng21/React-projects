import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

//need this export for the subscription actions 
export const authActions = authSlice.actions;
//need this export for the reducer function in the main store so it can be used for our state wide data in the App Component
export default authSlice.reducer;
