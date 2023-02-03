import { useEffect } from "react";
import useHttp from "../components/hooks/hooks/use-http";

import { getAllQuotes } from "../components/lib/api";
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Tony",
//     text: "Learning React is dope",
//   },
//   {
//     id: "q2",
//     author: "Mac Milla",
//     text: "World is so small till it Ain't",
//   },
//   {
//     id: "q3",
//     author: "Gahndi",
//     text: "An eye for an makes the whole world blind",
//   },
//   {
//     id: "q4",
//     author: "Peter Griffin",
//     text: "Love is like a fart if you have to force it, it's probably CRAP",
//   },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!data || data.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={data} />;
};

export default AllQuotes;
