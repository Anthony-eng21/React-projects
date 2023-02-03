import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
//give this store a Slice and it's reducer function
const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer } 
});

export default store;