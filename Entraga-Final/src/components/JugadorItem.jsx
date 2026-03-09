import { capitalize } from "../utils/capitalize";

export default function JugadorItem({ jug, onEditar, onEliminar }) {
  return (
    <li>
      <strong>{capitalize(jug.nombre)}</strong>
      {jug.equipo ? ` ${capitalize(jug.equipo)}` : ""}
      {jug.posicion ? ` (${capitalize(jug.posicion)})` : ""}
      <button onClick={onEditar}>✏️</button>
      <button onClick={onEliminar}>🗑️</button>
    </li>
  );
}