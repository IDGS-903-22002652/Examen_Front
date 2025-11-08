import React from "react";
import Formulario from "../components/Formulario";

const RegistroPage = () => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4 p-md-5">
        <h2 className="card-title text-center mb-4">
          Registro de Participante
        </h2>

        <Formulario />
      </div>
    </div>
  );
};

export default RegistroPage;
