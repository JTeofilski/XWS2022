import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./header.module.css";

const Header = ({ loggedIn, logout }) => {
  let navigate = useNavigate();

  const log = () => {
    logout();
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className={`class="p-3 bg-dark text-white"`}>
      <div className={`container-fluid py-2`}>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <i className="bi bi-book-half" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className={style.fonts}>
                Početna stranica
              </Link>
            </li>
          </ul>

          <div className="text-end">
            {loggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="btn btn-warning"
                  style={{ marginRight: "10px" }}
                >
                  Profil
                </Link>
                <Link to="/update" className="btn btn-warning">
                  Izmena podataka
                </Link>
                <button className="btn btn-warning mx-3" onClick={() => log()}>
                  Odjavi se
                </button>
              </>
            ) : (
              <>
                <Link to="/registration" className="btn btn-outline-light me-2">
                  Registracija
                </Link>
                <Link to="/login" className="btn btn-warning">
                  Prijava
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
