import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center text-center">
      <div>
        <h1 className="display-1 fw-bold text-primary">
          {error.status || "404"}
        </h1>

        <h2 className="display-5 fw-bold">Oops! Algo salió mal.</h2>

        <p className="lead">
          {error.status === 404
            ? "Lo sentimos, la página que buscas no existe o fue movida."
            : "Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde."}
        </p>

        <Link to="/" className="btn btn-primary btn-lg mt-3">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
