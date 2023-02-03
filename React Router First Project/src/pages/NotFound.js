import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="centered">
      <header>
        <Link to="/quotes" className="btn">
          Go Gome
        </Link>
      </header>
      <section>
        <h3>404 Page Not Found!</h3>
      </section>
    </div>
  );
};

export default NotFound;
