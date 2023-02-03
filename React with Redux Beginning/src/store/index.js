//createSlice and create/configureStore
import { configureStore } from "@reduxjs/toolkit";
//export a new const with reducer logic into other file and into reducer as an alternative
//to redux tool kit
// export const INCREMENT = 'increment';


//old redux reducer function logic 
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       //action payloads are other properties we add on the action object
//       //to make dynamic values
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//store has only one root reducer function and it takes in an object/map of slice's
//which get merged into a single reducer function behind the scenes

import counterReducer from "./counter";
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

//dont make store changes in this file but in our React Components
// store.dispatch({
//   type: "increment",
// });

// store.dispatch({
//   type: "decrement",
// });
