import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import RequireLogin from "./RequireLogin";
import Tweets from "./Tweets";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireLogin>
              <Tweets />
            </RequireLogin>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
document.getElementById('root');
