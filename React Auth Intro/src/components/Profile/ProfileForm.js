import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    //add validation if we want

    //logic for this changing of user password's with rest api and api endpoint
    
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBTuPG0ZmktW46SJZ261okKXVoJWS1xyHM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }), //we need some token(i.e &token=abc )Authorization in the headers object when we use thirdparty api logic
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer abc",
        },
      }
    ).then((res) => {
      //assumption: always succeeds
      history.replace('/');
    });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
