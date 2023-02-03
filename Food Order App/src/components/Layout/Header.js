import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import MealsImg from "../../assets/Meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Restaurant</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
