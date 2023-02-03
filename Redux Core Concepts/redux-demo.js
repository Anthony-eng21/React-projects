//import method for redux is a little different than a normal js library import(e.g react)

const redux = require("redux");
//need default state value that is assumed the first time it runs so it passes check
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.legacy_createStore(counterReducer);

// need something to subscribe to the store (e.g React Components)

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

//dispatch the action returns { counter : 2 }
// runs the reducer than the state({ counter: 1 }) value is 1 fter initializing then
// then we dispatch a new action making the reducer run again updating the state to 2
store.dispatch({
  type: "increment",
});
store.dispatch({
  type: "decrement",
});
//increment
// { counter: 1 }
// decrement
// { counter: 0 }
