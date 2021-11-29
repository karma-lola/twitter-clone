import { useState } from "react";
import "./NewTweetPage.css";
import { useNavigate } from "react-router-dom";

const NewTweetPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function post(e) {
    e.preventDefault();
    fetch("https://js-advanced-twitter.herokuapp.com/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: title,
        text: text,
        userId: sessionStorage.getItem("id"),
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/");
      })

      .catch((error) => console.log("error", error));
  }
  return (
    <div className="tweet-wrapper">
      <label type="text">The Tittle</label>
      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        placeholder="What's Happening"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={post}>Post</button>
    </div>
  );
};
export default NewTweetPage;
