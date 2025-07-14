import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";
import noticias from "../data/Noticias";

export default function BusquedaNoticias() {
  const [busqueda, setBusqueda] = useState("");
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const guardado = localStorage.getItem("historial");
    if (guardado) setHistorial(JSON.parse(guardado));
  }, []);

  useEffect(() => {
    if (busqueda.trim()) localStorage.setItem("busqueda", busqueda);
  }, [busqueda]);

  const agregarABusquedas = (nuevo) => {
    if (!nuevo || historial.includes(nuevo)) return;
    const nuevoHistorial = [nuevo, ...historial].slice(0, 5);
    setHistorial(nuevoHistorial);
    localStorage.setItem("historial", JSON.stringify(nuevoHistorial));
  };

  const limpiarHistorial = () => {
    setHistorial([]);
    localStorage.removeItem("historial");
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
    </>
  );
}
