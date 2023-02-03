import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  // const history = useHistory();
  const authCtx = useContext(AuthContext);
  //use this const value to conditionally render data depending on our app wide context/state
  const isLoggedIn = authCtx.isLoggedIn;

  //we're clearing the current Token string on the custom context api and adding this logic to the logout button
  const logoutHandler = () => {
    authCtx.logout();
    //optional: history.replace("/auth");
    //Redirection with frontend page protection(nav guards on the <App/>)
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Tony React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
