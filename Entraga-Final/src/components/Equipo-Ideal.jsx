import { useState } from "react";
import { guardarEnLocal, obtenerDeLocal, eliminarDeLocal } from "../utils/localStorage";
import { esSoloLetras } from "../utils/validaciones";
import { mostrarMensaje } from "../utils/alerts"; 
import { capitalize } from "../utils/capitalize";
import Modal from "./Modal";
import JugadorItem from "./JugadorItem";
import FormJugador from "./FormJugador";
import { MENSAJES } from "../utils/messages";

export default function EquipoIdeal() {
  const [jugadores, setJugadores] = useState(
    obtenerDeLocal("equipoIdeal") || []
  );
  const [nuevoJugador, setNuevoJugador] = useState({ nombre: "", equipo: "", posicion: "" });
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [jugadorAEliminar, setJugadorAEliminar] = useState(null);

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

  const agregarJugador = (e) => {
    e.preventDefault();
    const { nombre, equipo, posicion } = nuevoJugador;

    const erroresValidacion = validarCampos();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      mostrarMensaje(MENSAJES.camposObligatorios, "error");
      return;
    }

    if (!esSoloLetras(nombre)) {
      mostrarMensaje(MENSAJES.nombreSoloLetras, "error");
      return;
    }

    if (!esSoloLetras(equipo)) {
      mostrarMensaje(MENSAJES.equipoSoloLetras, "error");
      return;
    }

    if (!esSoloLetras(posicion)) {
      mostrarMensaje(MENSAJES.posicionSoloLetras, "error");
      return;
    }

    const nuevaLista = [...jugadores, nuevoJugador];
    setJugadores(nuevaLista);
    guardarEnLocal("equipoIdeal", nuevaLista);
    setNuevoJugador({ nombre: "", equipo: "", posicion: "" });
    setMensaje("");
    setErrores({});
    mostrarMensaje(MENSAJES.jugadorAgregado, "success"); 
  };
   const confirmarEliminacion = () => {
    const nuevaLista = jugadores.filter((_, i) => i !== jugadorAEliminar);
    setJugadores(nuevaLista);
    guardarEnLocal("equipoIdeal", nuevaLista);
    if (nuevaLista.length === 0) {
      eliminarDeLocal("equipoIdeal");
    }
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
    guardarEnLocal("equipoIdeal",nuevaLista);
    setNuevoJugador({ nombre: "", equipo: "", posicion: "" });
    setEditando(null);
    setMensaje("");
    setErrores({});
  };

  return (
    <div className="equipo-container">
      <h2>{capitalize("equipo ideal")}</h2>
      <FormJugador
        nuevoJugador={nuevoJugador}
        manejarCambio={manejarCambio}
        errores={errores}
        mensaje={mensaje}
        onSubmit={editando !== null ? guardarEdicion : agregarJugador}
        editando={editando}
      />
      <ul className="lista-jugadores">
        {jugadores.map((jug, index) => (
          <JugadorItem
            key={index}
            jug={jug}
            onEditar={() => empezarEdicion(index)}
            onEliminar={() => { setShowModal(true); setJugadorAEliminar(index); }}
          />
        ))}
      </ul>
      {showModal && (
        <Modal abierto={showModal} onClose={cancelarEliminacion}>
          <p>{MENSAJES.confirmacionEliminacion}</p>
          <button onClick={confirmarEliminacion}>Aceptar</button>
          <button onClick={cancelarEliminacion}>Cancelar</button>
        </Modal>
      )}
    </div>
  );
}
