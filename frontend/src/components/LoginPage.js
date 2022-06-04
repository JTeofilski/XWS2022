import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLoggedIn, setUserNameProp }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    const requestOptions = {
      method: "POST",
      body: data,
    };

    console.log(requestOptions.body);

    await fetch("http://localhost:8082/api/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          //   console.log(response.json());
          setLoggedIn(true);

          navigate("/profile");
        }
        return response.json();
      })
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        setUserNameProp(data.username);
        console.log("usao res");
      })
      .catch((error) => console.error("Greska ", error));
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Prijava na sistem</h1>

      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Koricničko ime:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label>Lozinka: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-warning">
              Prijavi se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
