import React from "react";
// use selector
import Post from "./Post/Post";

import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",

        width: "400px",
        height: "100px",
      }}
    >
      {posts &&
        posts[0] &&
        posts[0].creator &&
        posts.map((e, i) => <Post key={i} e={e} />)}
    </div>
  );
}

export default Posts;
