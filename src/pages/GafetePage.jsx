import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Gafete from "../components/Gafete";

const API_GAFETE_URL =
  "https://examenpractico20251108234645-eecqcvbrbcgnehhm.eastus2-01.azurewebsites.net/api/participante";

const GafetePage = () => {
  const { id } = useParams();

  const [participant, setParticipant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipant = async () => {
      try {
        const response = await fetch(`${API_GAFETE_URL}/${id}`);
        if (!response.ok) {
          throw new Error("Participante no encontrado");
        }
        const data = await response.json();
        setParticipant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipant();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando gafete...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mb-4 fw-bold">Gafete Individual</h2>
      <Gafete participant={participant} />
    </div>
  );
};

export default GafetePage;
