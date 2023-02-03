import { useEffect } from "react";

import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
//useRouteMatch is similiar to useLocation but it gives us more information in the returned value about the current/specified location 
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../components/hooks/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
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
//     author: 'Peter Griffin',
//     text: "Love is like a fart if you have to force it, it's probably CRAP"
//   }
// ];

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if(status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if(error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact >
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
