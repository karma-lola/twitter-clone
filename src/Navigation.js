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
      <Link className="navbar" to="/new-tweet-page">
        New Tweet
      </Link>
      {token && id ? (
        <Link className="navbar" to="/login">
          Log In
        </Link>
      ) : (
        <Link className="navbar" onClick={removeToken} to="/login">
          Log Out
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
