import React from "react";
import { Link } from "react-router-dom";

const ParticipantCard = ({ participant }) => {
  const defaultAvatar = "https://i.pravatar.cc/150";

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <Link to={`/gafete/${participant.id}`}>
            <img
              src={participant.avatar || defaultAvatar}
              alt={`Avatar de ${participant.nombre}`}
              className="img-fluid rounded-circle me-3"
              style={{ width: "70px", height: "70px", objectFit: "cover" }}
            />
          </Link>

          <div className="flex-grow-1">
            <h5 className="card-title mb-0">
              {participant.nombre} {participant.apellidos}
            </h5>

            <a
              href={`https://twitter.com/${participant.usuarioTwitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-none d-block mb-1"
            >
              @{participant.usuarioTwitter}
            </a>

            <p className="card-text text-muted mb-0">{participant.ocupacion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
