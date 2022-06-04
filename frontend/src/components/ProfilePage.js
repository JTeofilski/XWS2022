import React, { useState } from "react";
import Post from "./Post";

const ProfilePage = ({ username }) => {
  const [postText, setPostText] = useState("");

  const submitPost = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: postText,
        username: username,
      }),
    };

    console.log(requestOptions.body);

    await fetch("http://localhost:8081/api/post", requestOptions).then(
      (response) => {
        return response.json();
      }
    );
  };

  return (
    <>
      <h1>Zdravo, {username} </h1>
      <form onSubmit={(e) => submitPost(e)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Novi post</label>
          <input
            type="text"
            class="form-control"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Dodaj post
        </button>
      </form>
    </>
  );
};
export default ProfilePage;
