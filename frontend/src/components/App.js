import React from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import Homepage from "./Homepage";
import UpdatePage from "./UpdatePage";
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/registration" exact element={<RegistrationPage />} />
          <Route path="/" exact element={<Homepage />} />
          <Route path="/update" exact element={<UpdatePage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
