import React, { useState } from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import Homepage from "./Homepage";
import UpdatePage from "./UpdatePage";
import ProfilePage from "./ProfilePage";

const App = () => {
  const getLoginState = () => {
    return window.localStorage.getItem("token") === null ? false : true;
  };

  const [loggedIn, setLoggedIn] = useState(getLoginState());
  const [username, setUserName] = useState("");

  const logout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <Router>
        <Header logout={logout} loggedIn={loggedIn}></Header>
        <Routes>
          <Route
            path="/login"
            exact
            element={
              <LoginPage setLoggedIn={setLoggedIn} setUserName={setUserName} />
            }
          />
          <Route
            path="/registration"
            exact
            element={
              <RegistrationPage
                setLoggedIn={setLoggedIn}
                setUsernameProp={setUserName}
              />
            }
          />
          <Route path="/" exact element={<Homepage />} />
          <Route path="/update" exact element={<UpdatePage />} />
          <Route
            path="/profile"
            exact
            element={<ProfilePage username={username} />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
