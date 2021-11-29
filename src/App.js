import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import RequireLogin from "./RequireLogin";
import Tweets from "./Tweets";
import Navigation from "./Navigation";
import NewTweetPage from "./NewTweetPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireLogin >
              <Tweets />
            </RequireLogin>
          }
        />
        <Route
          path="/new-tweet-page"
          element={
            <RequireLogin>
              <NewTweetPage />
            </RequireLogin>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

