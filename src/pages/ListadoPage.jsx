import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ParticipantCard from "../components/ParticipantCard";

const API_URL = "https://localhost:7119/api/listado";

const Listado = () => {
  const navigate = useNavigate();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search") || "";

    const fetchParticipants = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}?q=${query}`);
        const data = await response.json();
        setParticipants(data);
      } catch (error) {
        console.error("Error al cargar participantes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get("search-input");
    setSearchParams({ search: searchQuery });
  };

  const goToRegister = () => {
    navigate("/registro");
  };

  return (
    <>
      <div className="text-end my-3">
        <button className="btn btn-success" onClick={goToRegister}>
          + Registrar Nuevo
        </button>
      </div>

      <form className="mb-4" onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            name="search-input"
            className="form-control"
            placeholder="Buscar participante por nombre..."
            defaultValue={searchParams.get("search") || ""}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Buscar
          </button>
        </div>
      </form>

      <div>
        {loading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}

        {!loading && participants.length === 0 && (
          <div className="alert alert-info" role="alert">
            No se encontraron participantes.
          </div>
        )}

        {!loading && participants.length > 0 && (
          <div className="d-flex flex-column gap-2">
            {participants.map((participant) => (
              <ParticipantCard key={participant.id} participant={participant} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Listado;
