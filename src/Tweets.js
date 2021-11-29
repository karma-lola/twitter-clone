import NewTweetPage from "./NewTweetPage";
import { useState, useEffect } from "react";
import "./Tweets.css";

const Tweets = ({ token }) => {
  const [tweetsPost, setTweetsPost] = useState([]);

  useEffect(() => {
    fetch("https://js-advanced-twitter.herokuapp.com/tweets", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((tweets) => setTweetsPost(tweets))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="old-tweets">
      <h2>Home</h2>
      <div>
        <NewTweetPage />
      </div>
      <div>
        {tweetsPost.map((tweet) => (
          <div className="tweet-box">
            <div>
              <h3 key={tweet.creator}>{tweet.creator}</h3>
              <h3 key={tweet.title}>{tweet.title}</h3>
            </div>
            <p key={tweet.text}>{tweet.text}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Tweets;
