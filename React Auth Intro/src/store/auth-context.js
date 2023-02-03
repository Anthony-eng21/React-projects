import React, { useState, useEffect, useCallback } from "react";
//gv
let logoutTimer;

//set up the data and shape we want for our general app wide state/context
//and get better ide auto-completion here for more readable code.
//login
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

//helper auth Token clock function
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  //if it has beeen an hour remove these storage tokens and timer
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  //is available if we pass the function's conditions and dont return null
  const tokenData = retrieveStoredToken();
  //initialize useState with the token instead of null by getting the local storage and checking if a token exits
  //this is possible local storage is a synchronous API
  let initialToken;
  //if we have a truthy value setup our inital token and it's data
  if(tokenData){
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  //this double ! syntax makes a nullish value into boolean value in this new constant
  //if token is a string(!empty) return true, else token is an empty string return false
  const userIsLoggedIn = !!token;

  //nothing changes and only browser api used so no dependencies 
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem('expirationTime');
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  //set token then get the argument from constext function and set my gotten token value to token
  // we want to add the expiration time in local storage cause thats where our token lives
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    //local storage can only store primitive data values(i.e strings, numbers, etc..)
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    //about an hour on the API guidelines
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  //if this token data changes check if its a truthy change then it will automatically set this caluculated timer when we use an auth key
  useEffect(() => {
    if(tokenData){
      console.log(tokenData.duration)
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler])

  //this is the context object available state wide which we assign to the parent AuthContext.Provider's value property
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
