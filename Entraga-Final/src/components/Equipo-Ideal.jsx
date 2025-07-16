import { useState } from "react";

export default function EquipoIdeal() {
  const [jugadores, setJugadores] = useState(
    JSON.parse(localStorage.getItem("equipoIdeal")) || []
  );
  const [nuevoJugador, setNuevoJugador] = useState({ nombre: "", equipo: "",posicion:""});
  const [editando, setEditando] = useState(null);

  const manejarCambio = (e) => {
    setNuevoJugador({ ...nuevoJugador, [e.target.name]: e.target.value });
  };

  const guardarLocal = (nuevaLista) => {
    localStorage.setItem("equipoIdeal", JSON.stringify(nuevaLista));
  };

  const agregarJugador = (e) => {
    e.preventDefault();
    if (!nuevoJugador.nombre || !nuevoJugador.equipo) return;

    const nuevaLista = [...jugadores, nuevoJugador];
    setJugadores(nuevaLista);
    guardarLocal(nuevaLista);
    setNuevoJugador({ nombre: "", equipo: "", posicion: "" });
  };

  const eliminarJugador = (index) => {
    const nuevaLista = jugadores.filter((_, i) => i !== index);
    setJugadores(nuevaLista);
    guardarLocal(nuevaLista);
  };

  const empezarEdicion = (index) => {
    setEditando(index);
    setNuevoJugador(jugadores[index]);
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    const nuevaLista = jugadores.map((jug, i) =>
      i === editando ? nuevoJugador : jug
    );
    setJugadores(nuevaLista);
    guardarLocal(nuevaLista);
    setNuevoJugador({ nombre: "", equipo: "", posicion: "" });
    setEditando(null);
  };

  return (
    <div className="equipo-container">
      <h2>Equipo Ideal</h2>

      <form onSubmit={editando !== null ? guardarEdicion : agregarJugador}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del jugador"
          value={nuevoJugador.nombre}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="equipo"
          placeholder="Equipo"
          value={nuevoJugador.equipo}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="posicion"
          placeholder="Posición"
          value={nuevoJugador.posicion}
          onChange={manejarCambio}
        />
        <button type="submit">{editando !== null ? "Guardar" : "Agregar"}</button>
      </form>

      <ul className="lista-jugadores">
        {jugadores.map((jug, index) => (
          <li key={index}>
            <strong>{jug.nombre}</strong>
            {jug.equipo ? `  ${jug.equipo}` : ""}
            {jug.posicion ? ` (${jug.posicion})` : ""}
            <button onClick={() => empezarEdicion(index)}>✏️</button>
            <button onClick={() => eliminarJugador(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
