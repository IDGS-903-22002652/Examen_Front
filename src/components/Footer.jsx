import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-light py-3">
      <div className="container text-center">
        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} Congreso de Tecnologías de la
          Información.
          <br />
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
