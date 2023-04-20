import React, { useEffect, useState } from "react";
import "../Page.css";
import Post from "../Posts/Post";
import TweetBox from "./TweetBox";

import useLoggedInUser from "../../Hooks/useLoggedInUser";
import { Avatar } from "@mui/material";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [loggedInUser] = useLoggedInUser();

  const useProfilePic = loggedInUser[0]?.profileImage
    ? loggedInUser[0]?.profileImage
    : "http://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

  useEffect(() => {
    // fetch("http://localhost:5000/post")
    fetch("https://twitter-backend-project.onrender.com/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [posts]);

  return (
    <>
      <div className="page">
        <div className="avtr">
          <Avatar src={useProfilePic} />
        </div>

        <h3
          style={{
            paddingTop: "1rem",
            fontWeignt: "bold",
            color: "#1DA1F2",
            paddingLeft: "1rem",
          }}
        >
          Home
        </h3>
        <TweetBox />

        {posts.map((p) => (
          <Post key={p._id} p={p} />
        ))}
      </div>
    </>
  );
};
export default Feed;
