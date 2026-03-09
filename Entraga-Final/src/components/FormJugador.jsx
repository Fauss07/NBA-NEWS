import { MENSAJES } from "../utils/messages";

export default function FormJugador({
  nuevoJugador,
  manejarCambio,
  errores,
  mensaje,
  onSubmit,
  editando
}) {
  return (
    <form onSubmit={onSubmit}>
      {mensaje && <p className="mensaje">{mensaje}</p>}
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del jugador"
        value={nuevoJugador.nombre}
        onChange={manejarCambio}
      />
      {errores.nombre && <p className="error">{MENSAJES.camposObligatorios}</p>}
      <input
        type="text"
        name="equipo"
        placeholder="Equipo"
        value={nuevoJugador.equipo}
        onChange={manejarCambio}
      />
      {errores.equipo && <p className="error">{MENSAJES.camposObligatorios}</p>}
      <input
        type="text"
        name="posicion"
        placeholder="Posición"
        value={nuevoJugador.posicion}
        onChange={manejarCambio}
      />
      {errores.posicion && <p className="error">{MENSAJES.camposObligatorios}</p>}
      <button type="submit">{editando !== null ? "Guardar" : "Agregar"}</button>
    </form>
  );
}