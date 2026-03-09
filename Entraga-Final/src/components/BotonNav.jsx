import React from 'react'
import NavButton from './NavButton'

const BotonNav = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className='nav-buttons-container' style={{ position: "sticky", bottom: 0, zIndex: 10 }}>
      <NavButton 
        className="nav-button"
        label="Noticias"
        isActive={currentPage === "noticias"}
        onClick={() => setCurrentPage("noticias")}
      />
      <NavButton
        className="nav-button"
        label="Resultados"
        isActive={currentPage === "resultados"}
        onClick={() => setCurrentPage("resultados")}
      />
      <NavButton
        className="nav-button"
        label="Equipos"
        isActive={currentPage === "equipos"}
        onClick={() => setCurrentPage("equipos")}
      />
      <NavButton
        className="nav-button"
        label="Equipo Ideal"
        isActive={currentPage === "equipo ideal"}
        onClick={() => setCurrentPage("equipo ideal")}
      />
    </nav>
  )
}

export default BotonNav
