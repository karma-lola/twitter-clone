import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");

  function removeToken() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
  }
  return (
    <nav>
      <Link className="navbar" to="/">
        Tweets
      </Link>
      {token && id ? (
        <Link className="navbar" to="/Login">
          Log In
        </Link>
      ) : (
        <Link className="navbar" onClick={removeToken} to="/Login">
          Log Out
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
