import React from "react";
import { useNavigate } from "react-router-dom";

import utlLogo from "../assets/utl-logo.png";
import ticLogo from "../assets/tic-logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate("/participantes");
  };

  return (
    <div
      className="container p-4 d-flex flex-column justify-content-center align-items-center bg-white shadow-lg rounded-4"
      style={{ maxWidth: "600px", minHeight: "400px" }}
    >
      <header className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
        <img
          src={utlLogo}
          alt="Logo UTL"
          className="img-fluid"
          style={{ maxHeight: "70px" }}
        />
        <img
          src={ticLogo}
          alt="Logo Congreso TIC"
          className="img-fluid"
          style={{ maxHeight: "70px" }}
        />
      </header>

      <main className="text-center mt-4">
        <h1 className="display-6 fw-bold text-dark mb-4">
          Congreso de Tecnologías de la Información
        </h1>

        <button
          onClick={handleEnterClick}
          className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm"
          style={{ fontSize: "1.2rem" }}
        >
          Entrar
        </button>
      </main>
    </div>
  );
};

export default HomePage;
