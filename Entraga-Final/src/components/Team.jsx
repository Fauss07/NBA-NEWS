import { useState } from "react";
export default function Team({ equipo }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <div className="team-card" onClick={() => setAbierto(true)}>
        <img src={equipo.logo} alt={equipo.nombre} className="team-logo" />
        <h3>{equipo.nombre}</h3>
      </div>

      {abierto && (
        <div className="modal-overlay" onClick={() => setAbierto(false)}>
          <div
            className="modal-content fade-in"
            style={{
              backgroundImage: `url(${equipo.logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cerrar" onClick={() => setAbierto(false)}>✖</button>
            <h2>{equipo.nombre}</h2>
            <p>{equipo.descripcion}</p>
          </div>
        </div>
      )}
    </>
  );
}

