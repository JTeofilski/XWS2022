import React, { useState, useEffect } from "react";
import Post from "./Post";

const PublicProfile = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get("username");

      await fetch(`http://localhost:8081/api/post/${myParam}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPosts(data);
        });
    })();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};
export default PublicProfile;
