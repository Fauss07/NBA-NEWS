import { useState } from "react";
/* agregar validaciones y mensajes de error */
export default function EquipoIdeal() {
  const [jugadores, setJugadores] = useState(
    JSON.parse(localStorage.getItem("equipoIdeal")) || []
  );
  const [nuevoJugador, setNuevoJugador] = useState({ nombre: "", equipo: "", posicion: "" });
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [jugadorAEliminar, setJugadorAEliminar] = useState(null);

  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  const validarCampos = () => {
    const nuevosErrores = {};
    if (!nuevoJugador.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }
    if (!nuevoJugador.equipo.trim()) {
      nuevosErrores.equipo = "El equipo es obligatorio";
    }
    if (!nuevoJugador.posicion.trim()) {
      nuevosErrores.posicion = "La posición es obligatoria";
    }
    return nuevosErrores;
  };

  const manejarCambio = (e) => {
    setNuevoJugador({ ...nuevoJugador, [e.target.name]: e.target.value });
  };

  const guardarLocal = (nuevaLista) => {
    localStorage.setItem("equipoIdeal", JSON.stringify(nuevaLista));
  };

  const agregarJugador = (e) => {
    e.preventDefault();
    const { nombre, equipo, posicion } = nuevoJugador;

    const erroresValidacion = validarCampos();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    if (!soloLetras.test(nombre)) {
      setMensaje("El nombre solo debe contener letras");
      return;
    }

    if (!soloLetras.test(equipo)) {
      setMensaje("El equipo solo debe contener letras");
      return;
    }

    if (!soloLetras.test(posicion)) {
      setMensaje("La posición solo debe contener letras");
      return;
    }

    const nuevaLista = [...jugadores, nuevoJugador];
    setJugadores(nuevaLista);
    guardarLocal(nuevaLista);
    setNuevoJugador({ nombre: "", equipo: "", posicion: "" });
    setMensaje(""); // Limpiar mensaje
    setErrores({});
  };
   const confirmarEliminacion = () => {
    const nuevaLista = jugadores.filter((_, i) => i !== jugadorAEliminar);
    setJugadores(nuevaLista);
    guardarLocal(nuevaLista);
    setShowModal(false);
    setJugadorAEliminar(null);
  };
    const cancelarEliminacion = () => {
    setShowModal(false);
    setJugadorAEliminar(null);
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
    setMensaje("");
    setErrores({});
  };

  return (
    <div className="equipo-container">
      <h2>Equipo Ideal</h2>

      <form onSubmit={editando !== null ? guardarEdicion : agregarJugador}>
        {mensaje && <p className="mensaje">{mensaje}</p>}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del jugador"
          value={nuevoJugador.nombre}
          onChange={manejarCambio}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
        <input
          type="text"
          name="equipo"
          placeholder="Equipo"
          value={nuevoJugador.equipo}
          onChange={manejarCambio}
        />
        {errores.equipo && <p className="error">{errores.equipo}</p>}
        <input
          type="text"
          name="posicion"
          placeholder="Posición"
          value={nuevoJugador.posicion}
          onChange={manejarCambio}
        />
        {errores.posicion && <p className="error">{errores.posicion}</p>}
        <button type="submit">{editando !== null ? "Guardar" : "Agregar"}</button>
      </form>

      <ul className="lista-jugadores">
        {jugadores.map((jug, index) => (
          <li key={index}>
            <strong>{jug.nombre}</strong>
            {jug.equipo ? ` ${jug.equipo}` : ""}
            {jug.posicion ? ` (${jug.posicion})` : ""}
            <button onClick={() => empezarEdicion(index)}>✏️</button>
            <button onClick={() => { setShowModal(true); setJugadorAEliminar(index); }}>🗑️</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal-form">
          <div className="modal-contenido-form">
            <p>¿Estás seguro que querés eliminar este jugador?</p>
            <button onClick={confirmarEliminacion}>Aceptar</button>
            <button onClick={cancelarEliminacion}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
