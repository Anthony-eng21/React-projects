//this hook allows use to change the browser history e.g here where we want to Nav away
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useHttp from "../components/hooks/hooks/use-http";

import QuoteForm from "../components/quotes/QuoteForm";
// /addQuote makes a post request to fire base then to a quotes node where we send the data and store it firebase
import { addQuote } from "../components/lib/api";

//
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  //with this we navigate away as soon as the request completed on a sideffect function when the status changes in our form validity
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;
