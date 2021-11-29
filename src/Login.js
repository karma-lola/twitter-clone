import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const token = sessionStorage.getItem("token");
  // eslint-disable-next-line
  const id = sessionStorage.getItem("id");
  const Navigate = useNavigate("");

  const loginHandle = (e) => {
    e.preventDefault();
    fetch("https://js-advanced-twitter.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        sessionStorage.setItem("token", result.accessToken);
        sessionStorage.setItem("id", result.user.id);
        console.log(result);
      })
      .then(() => {
        Navigate("/");
      })

      .catch((error) => console.log("error", error));
  };

  return (
    <div className="login-container">
      <h2>Log In To Twitter</h2>
      <form onSubmit={loginHandle}>
        <div>
          <label>User Email</label>
          <input
            type="text"
            placeholder="EMAIL"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={loginHandle}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
