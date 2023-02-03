import { useRef, useEffect } from "react";

import useHttp from "../hooks/hooks/use-http";
import { addComment } from "../lib/api";

import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  //we expect a function on this prop and we call that function after we're done adding the comment in the useEffect hook and lifting that state up to Comment
  const { onAddedComment } = props;

  const { sendRequest, status, error } = useHttp(addComment);

  // to tell the parent comment component we're done with adding a new comment with this side effect and it should refetch comments
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;
    
    // optional: Could validate here
    // send comment to server
    //need to get the quoteId through props
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId});
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
