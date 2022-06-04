import React, { useState } from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import Homepage from "./Homepage";
import UpdatePage from "./UpdatePage";
import ProfilePage from "./ProfilePage";
import PublicProfile from "./PublicProfile";

const App = () => {
  const getLoginState = () => {
    return window.localStorage.getItem("token") === null ? false : true;
  };

  const [loggedIn, setLoggedIn] = useState(getLoginState());
  const [username, setUserName] = useState("");

  const logout = () => {
    console.log("usao u log out");
    setLoggedIn(false);
  };
  return (
    <div>
      <Router>
        {console.log("router")}
        <Header logout={logout} loggedIn={loggedIn}></Header>
        <Routes>
          <Route
            path="/login"
            exact
            element={
              <LoginPage
                setLoggedIn={setLoggedIn}
                setUserNameProp={setUserName}
              />
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
          <Route
            path="/update"
            exact
            element={<UpdatePage usernameProp={username} />}
          />
          <Route
            path="/profile"
            exact
            element={<ProfilePage username={username} />}
          />

          <Route path="/user*" exact element={<PublicProfile />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
