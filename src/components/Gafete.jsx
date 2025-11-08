import React, { useState } from "react";
import "../styles/Gafete.css";

const BluePattern = () => <div className="gafete-pattern"></div>;

const Gafete = ({ participant }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!participant) return null;

  const { nombre, apellidos, usuarioTwitter, ocupacion, email, avatar } =
    participant;
  const defaultAvatar = "https://i.pravatar.cc/150";

  return (
    <>
      <div className="gafete-scene">
        <div
          className={`gafete-container ${isFlipped ? "is-flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="gafete-face gafete-front">
            <div className="gafete-front-top">
              <BluePattern />
              <div className="gafete-avatar-container">
                <img
                  src={avatar || defaultAvatar}
                  alt={nombre}
                  className="gafete-avatar"
                />
              </div>
            </div>
            <div className="gafete-front-bottom">
              <h2 className="gafete-name">
                {nombre} {apellidos}
              </h2>
              <p className="gafete-occupation">{ocupacion}</p>
              <p className="gafete-website">www.congreso-tic.com</p>
            </div>
          </div>

          <div className="gafete-face gafete-back text-center">
            <div className="gafete-back-top">
              <div className="back-info">
                <h3 className="gafete-name-back">
                  {nombre} {apellidos}
                </h3>
                <p className="back-email">{email}</p>
                <hr />
                <p className="back-social">
                  <strong>Twitter:</strong> @{usuarioTwitter}
                </p>
                <p className="back-social">
                  <strong>Ocupación:</strong> {ocupacion}
                </p>
              </div>
            </div>
            <div className="gafete-back-bottom">
              <BluePattern />
            </div>
          </div>
        </div>
      </div>
      <small className="text-center d-block mt-3 text-muted">
        Haz clic en el gafete para girarlo
      </small>
    </>
  );
};

export default Gafete;
