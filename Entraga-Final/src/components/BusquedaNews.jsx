import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";
import noticias from "../data/Noticias";
import { guardarEnLocal, obtenerDeLocal } from "../utils/localStorage";
import { capitalize } from "../utils/capitalize";
import { mostrarMensaje } from "../utils/alerts";
import { MENSAJES } from "../utils/messages";

export default function BusquedaNoticias() {
  const [busqueda, setBusqueda] = useState("");
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const guardado = obtenerDeLocal("historial");
    if (guardado) setHistorial(JSON.parse(guardado));
  }, []);

  useEffect(() => {
    if (busqueda.trim()) guardarEnLocal("busqueda", busqueda);
  }, [busqueda]);

  const agregarABusquedas = (nuevo) => {
    if (!nuevo) {
      mostrarMensaje(MENSAJES.camposObligatorios, "error");
      return;
    }
    if (historial.includes(nuevo)) {
      mostrarMensaje("La búsqueda ya está en el historial", "info");
      return;
    }
    const nuevoHistorial = [nuevo, ...historial].slice(0, 5);
    setHistorial(nuevoHistorial);
    guardarEnLocal("historial", JSON.stringify(nuevoHistorial));
  };

  const limpiarHistorial = () => {
    setHistorial([]);
    guardarEnLocal("historial", JSON.stringify([]));
  };

  const noticiasFiltradas = noticias.filter((n) =>
    n.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        historial={historial}
        onSeleccionarBusqueda={setBusqueda}
        onNuevaBusqueda={agregarABusquedas}
        onLimpiarHistorial={limpiarHistorial}
      />
      <NewsList noticias={noticiasFiltradas} />
      {historial.map((item, idx) => (
        <div key={idx}>{capitalize(item)}</div>
      ))}
    </>
  );
}
