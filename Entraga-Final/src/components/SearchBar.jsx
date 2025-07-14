import React, { useState } from 'react'

// Componente SearchBar que recibe varias props para manejar la búsqueda y el historial
const SearchBar = ({ 
  busqueda, // texto actual en el input
  setBusqueda, // función para actualizar el texto del input
  historial = [], // array con el historial de búsquedas
  onSeleccionarBusqueda, // función para seleccionar un elemento del historial
  onNuevaBusqueda, // función que se llama al hacer una nueva búsqueda
  onLimpiarHistorial // función para limpiar el historial
}) => {
  // Estado local para mostrar/ocultar el historial
  const [showHistorial, setShowHistorial] = useState(false);

  // Maneja el evento de presionar una tecla en el input
  const handleKeyDown = (e) => {
    // Si se presiona Enter y hay texto, ejecuta la búsqueda y oculta el historial
    if (e.key === "Enter" && busqueda.trim()) {
      onNuevaBusqueda(busqueda);
      setShowHistorial(false);
    }
  };

  return (
    // Contenedor principal de la barra de búsqueda
    <div className='div-search-bar-'>
      <input
        className='search-bar'
        type="text"
        placeholder='Buscar...'
        value={busqueda} // valor del input controlado por el estado externo
        onChange={(e) => setBusqueda(e.target.value)} // actualiza el texto al escribir
        onFocus={() => setShowHistorial(true)} // muestra el historial al enfocar el input
        // Oculta el historial al perder el foco, pero espera 150ms para permitir clicks
        onBlur={() => setTimeout(() => setShowHistorial(false), 150)}
        onKeyDown={handleKeyDown} // maneja la búsqueda al presionar Enter
      />
      {/* Si showHistorial es true y hay elementos en el historial, muestra la ventana flotante */}
      {showHistorial && historial.length > 0 && (
        <div className='mini-ventana'>
          <div className='div-search-bar'>
            {/* Botón para limpiar el historial, usa onMouseDown para evitar perder el foco antes de tiempo */}
            <button 
              className='button-limpiar-historial'
              onMouseDown={onLimpiarHistorial}
            >
              Limpiar historial
            </button>
          </div>
          {/* Muestra cada elemento del historial como opción seleccionable */}
          {historial.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "0.4rem 1rem",
                cursor: "pointer",
                color: "#fff"
              }}
              // Al hacer click, selecciona la búsqueda y la coloca en el input
              onMouseDown={() => onSeleccionarBusqueda(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
