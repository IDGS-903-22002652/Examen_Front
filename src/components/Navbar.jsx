import React from "react";
import { Link, NavLink } from "react-router-dom";
import utlLogo from "../assets/utl-logo.png";
import ticLogo from "../assets/tic-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-3">
          <img src={utlLogo} alt="Logo UTL" style={{ maxHeight: "40px" }} />
          <img
            src={ticLogo}
            alt="Logo Congreso TIC"
            style={{ maxHeight: "40px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                end
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/participantes"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Listado
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/registro"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Registro
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
