import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  //event type we get when we listen to this form's submission
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //this !. annotation lets ts know this null value wont be in this current spot so drill in and give me this prop implicitly
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error maybe
      return;
    }
    todosCtx.addTodo(enteredText);

  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button> Add Todo </button> 
    </form>
  );
};

export default NewTodo;
