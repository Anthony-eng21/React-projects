//making a nested route in a Component to render different depending on the url Route
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, New User</p>
      </Route>
    </>
  );
};

export default Welcome;
