import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_REGISTER_URL =
  "https://examenpractico20251108234645-eecqcvbrbcgnehhm.eastus2-01.azurewebsites.net/api/registro";
const avatarOptions = [
  {
    id: "avatar1",
    url: "https://cdn-icons-png.flaticon.com/512/8090/8090406.png",
    label: "Avatar 1",
  },
  {
    id: "avatar2",
    url: "https://cdn-icons-png.flaticon.com/512/147/147135.png",
    label: "Avatar 2",
  },
  {
    id: "avatar3",
    url: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    label: "Avatar 3",
  },
];

const Formulario = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    usuarioTwitter: "",
    ocupacion: "",
    avatar: "",
    aceptaTerminos: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.aceptaTerminos) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }
    if (formData.avatar === "") {
      setError("Por favor, selecciona un avatar.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMsg =
          errorData.title ||
          (errorData.errors
            ? Object.values(errorData.errors).join(", ")
            : "Ocurrió un error al registrar.");
        throw new Error(errorMsg);
      }

      navigate("/participantes");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellidos" className="form-label">
          Apellidos:
        </label>
        <input
          type="text"
          className="form-control"
          id="apellidos"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="usuarioTwitter" className="form-label">
          Usuario en Twitter:
        </label>
        <div className="input-group">
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            id="usuarioTwitter"
            name="usuarioTwitter"
            placeholder="Ej: tuUsuario"
            value={formData.usuarioTwitter}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="ocupacion" className="form-label">
          Ocupación:
        </label>
        <input
          type="text"
          className="form-control"
          id="ocupacion"
          name="ocupacion"
          value={formData.ocupacion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Selecciona un Avatar:</label>
        <div className="d-flex justify-content-around text-center">
          {avatarOptions.map((option) => (
            <div key={option.id}>
              <input
                type="radio"
                className="form-check-input visually-hidden"
                id={option.id}
                name="avatar"
                value={option.url}
                onChange={handleChange}
                checked={formData.avatar === option.url}
              />
              <label htmlFor={option.id} style={{ cursor: "pointer" }}>
                <img
                  src={option.url}
                  alt={option.label}
                  className={`img-thumbnail rounded-circle ${
                    formData.avatar === option.url
                      ? "border-primary border-3"
                      : ""
                  }`}
                  style={{ width: "80px", height: "80px" }}
                />
                <span className="d-block mt-1">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="aceptaTerminos"
          name="aceptaTerminos"
          checked={formData.aceptaTerminos}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="aceptaTerminos">
          Leí y acepto los términos y condiciones
        </label>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Guardando...
            </>
          ) : (
            "Guardar"
          )}
        </button>
      </div>
    </form>
  );
};

export default Formulario;
