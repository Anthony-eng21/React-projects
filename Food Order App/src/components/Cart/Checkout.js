import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

//helper validation functions
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const isValidCard = (value) => value.trim().length <= 16;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
    cardNumber: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const cardInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCard = cardInputRef.current.value;

    //helper variables
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCardIsValid = isValidCard(enteredCard);

    //form validity state function
    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
      cardNumber: enteredCardIsValid,
    });

    //helper constant
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredCardIsValid;

    if (!formIsValid) {
      return;
    }
    //submit the cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
      cardNumber: enteredCard,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? null : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? null : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? null : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? null : classes.invalid
  }`;

  const cardControlClasses = `${classes.control} ${
    formInputsValidity.cardNumber ? null : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid address!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Entered Value needs to be greater than 5</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <form className={classes.actions1}>
        <div className={cardControlClasses}>
          <label htmlFor="name">Card number</label>
          <input type="text" id="card" ref={cardInputRef} />
          <label htmlFor="name">Expiration</label>
          <input type="text" id="card" ref={cardInputRef} />
          <label htmlFor="name">CCV</label>
          <input type="text" id="card" ref={cardInputRef} />
          {!formInputsValidity.cardNumber && (
            <p>Please enter a valid card number!</p>
          )}
        </div>
      </form>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
