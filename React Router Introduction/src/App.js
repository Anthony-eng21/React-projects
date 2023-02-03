//Switch wraps around routes and making it so only one route is open at given time and so that it
//renders only one page at a time
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  //exact prop tells Router that this route should lead to an exact match looking at the whole path making it so multiple routes
  //arent active at a single time
  //we use exact on the redirect because if we didnt every page would have an infinite redirect loop
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// / our-domain.com/Welcome => Welcome Component
// / our-domain.com/Products => Products Component

// / dynamic path segments: our-domain.com/product-detail/<any value />
