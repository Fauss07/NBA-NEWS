import { useState } from "react";
export default function Scores() {
  const [partidoAbierto, setPartidoAbierto] = useState(null);

  // Datos de ejemplo
  const partidosEjemplo = [
    {
      id: 1,
      equipos: "Lakers vs Warriors",
      resultado: "110 - 102",
      detalles: "Partido muy reñido con remontada de Lakers en el 4to cuarto"
    },
    {
      id: 2,
      equipos: "Bucks vs Celtics",
      resultado: "98 - 101",
      detalles: "Victoria ajustada de Celtics en el último minuto"
    },
    {
      id: 3,
      equipos: "Suns vs Nuggets",
      resultado: "123 - 115",
      detalles: "Gran ofensiva de los Suns liderada por Booker"
    }
  ];

  return (
    <div className="scores-container">
      <h2 className="section-title">Últimos resultados</h2>
      <div className="scores-grid">
        {partidosEjemplo.map((partido) => (
          <div 
            key={partido.id}
            className="score-card"
            onClick={() => setPartidoAbierto(partido)}
          >
            <div className="teams">
              <span>{partido.equipos}</span>
            </div>
            <div className="result">
              <strong>{partido.resultado}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalles */}
      {partidoAbierto && (
        <div className="modal-overlay" onClick={() => setPartidoAbierto(null)}>
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cerrar" onClick={() => setPartidoAbierto(null)}>
              ✖
            </button>

            <div className="score-display">
              <span>{partidoAbierto.resultado}</span>
            </div>

            <div className="game-details">
              <h3>Detalles del partido</h3>
              <p>{partidoAbierto.detalles}</p>
              <div className="stats">
                <p>🏀 Máximo anotador: LeBron James (32 pts)</p>
                <p>🔄 Mejor asistente: Stephen Curry (10 ast)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
  