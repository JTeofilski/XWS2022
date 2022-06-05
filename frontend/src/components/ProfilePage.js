import React, { useState } from "react";
import Post from "./Post";

const ProfilePage = ({ username }) => {
  const [postText, setPostText] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

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

    if (postText === "") {
      setMessage("Nije moguce dodati prazan post");
      setShowMessage(true);
      return;
    }

    await fetch("http://localhost:8081/api/post", requestOptions).then(
      (response) => {
        if (response.ok) {
          setMessage("Post usesno dodat");
          setShowMessage(true);
        }
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
            style={{ width: "50%" }}
            type="text"
            class="form-control"
            value={postText}
            onChange={(e) => {
              setPostText(e.target.value);
              setShowMessage(false);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Dodaj post
        </button>

        <div>{showMessage ? message : null}</div>
      </form>
    </>
  );
};
export default ProfilePage;
