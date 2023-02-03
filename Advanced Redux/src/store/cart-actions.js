import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        //dont need a configuration object since it makes a GET request by default and that's what we want
        'https://react-http-f025d-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error("Could not fetch Cart Data!");
      }

      const data = await response.json();
      //we need to return this because the scope of this value is nested and we want to work with it
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart Data Failed!",
        })
      );
    }
  };
};

//custom action creator(Thunks) are function closures that takes in another funciton that eventually returns an async action function/object
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-f025d-default-rtdb.firebaseio.com/cart.json",
        {
          //put overwrites existing data so in lamans terms it "updates"
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Cart Data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data Failed!",
        })
      );
    }
  };
};
