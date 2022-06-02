import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLoggedIn, setUserName }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", email);
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
          window.localStorage.setItem("token", response.json().token);
          navigate("/profile");
        }
        return response.json();
      })

      .then((data) => setUserName(data.username))
      .catch((error) => console.error("Greska ", error));
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Prijava na sistem</h1>

      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>E-mail:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
