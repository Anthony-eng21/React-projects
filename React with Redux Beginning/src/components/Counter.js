import { useSelector, useDispatch } from "react-redux";

import { counterActions } from '../store/counter';

import classes from "./Counter.module.css";

//w/o Redux Toolkit helps from manipulating nested data 
// import { INCREMENT } from "../store";

const Counter = () => {
  //creates a dispatch function for the redux store
  const dispatch = useDispatch();

  //useSelector grabs the part of the state we want to extract from the store
  const counter = useSelector((state) => state.counter.counter);
  // E.g { counter: 0 } we grab for this component, set's up a subscription to the redux
  //store for this Component behind the scenes

  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // this how to dispatch an action with toolkit 
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //this will match the type in the store to pass reducer logic
    //that we can later wire up to the react buttons
    //amount is another property we get on this action in the reducer
    dispatch(counterActions.increase(10)); //{ type: UNIQUE_ID, payload: 10 }
  };

  const decrementHandler = () => {
    //this will mach the type in the store to pass reducer logic
    //that we can later wire up to the react buttons
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>420 button</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
