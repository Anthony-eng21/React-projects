import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Product 1: Some book</Link>
        </li>
        <li>
          <Link to="/products/p2">Product 2: Some blunt object🤑</Link>
        </li>
        <li>
          <Link to="/products/p3">Product 3: Some Wood🔥</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
