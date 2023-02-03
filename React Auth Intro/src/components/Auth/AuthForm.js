import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //use context hook helps us get the specific state wide data we made in the store folder
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional add validation
    setIsLoading(true);

    let url;
    //isLogin condition
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTuPG0ZmktW46SJZ261okKXVoJWS1xyHM";
    } else {
      //when not in isLogin mode(create account) do this request on submission (auth firebase rest api)
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTuPG0ZmktW46SJZ261okKXVoJWS1xyHM";
    }
    fetch(
      url,
      {
        method: "POST",
        //third key in the method we pass here needs to be returnSecureToken and needs a boolean value for the action/payload we are doing
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        //?Ensures the Auth rest api knows we have some json data to work with
        headers: {
          "Content-Type": "application/json",
        },
      } //handle request/response
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            //show an error modal or access error key and in it's nested object
            // access the API message key with the string of the error message
            let errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            //alert() of api error specific data
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //creates a new time stamp on the new date function from milliseconds to seconds
        const expirationTime = new Date(
          new Date().getTime() + (+data.expiresIn * 1000)
        );
        // console.log(data); we wanna get the returned idToken field from this response object in our state wide data
        //wanna pass our expT as a string cause thats how we have the login time stamp formatted
        authCtx.login(data.idToken, expirationTime.toISOString());
        //history allows us to redirect after this asynchronous task ends (HomePage)
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
