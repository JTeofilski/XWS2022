import React, { useState } from "react";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.like);
  const [dislikes, setDislikes] = useState(post.dislike);

  const handleLike = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(
      `http://localhost:8081/api/post/like/${post.id}`,
      requestOptions
    );
    setLikes(likes + 1);
  };

  const handleDislike = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(
      `http://localhost:8081/api/post/dislike/${post.id}`,
      requestOptions
    );
    setDislikes(dislikes + 1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{ width: "50vw", padding: "10px", border: "1px solid black" }}
      >
        {post?.username}

        <div
          style={{
            padding: "10px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{post?.text}</div>
          <div>
            <button onClick={() => handleLike()}>{likes} Svidjanja</button>
            <button onClick={() => handleDislike()}>
              {dislikes} Nesvidjanja
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
