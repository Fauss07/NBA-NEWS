import React from 'react'
import NavButton from './NavButton'
import EquipoIdeal from './Equipo-Ideal'

const BotonNav = ({ currentPage, setCurrentPage }) => {
  return (
    <div className='nav-buttons-container'>
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
    </div>
  )
}

export default BotonNav
