import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";

import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// /lazy loading is nice because it splits our code and minifies code bundle size
// /lazy loading takes in an anonymous function pointing at a import call to the specified path/SPA we want at a specific time so that all the code isn't executed at once
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
//we need a fallback UI e.g suspense to wrap around the switch and add the fallback which can take in a funtion jsx another Component whateva
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'))
function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered">
        <LoadingSpinner />
      </div>} >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
