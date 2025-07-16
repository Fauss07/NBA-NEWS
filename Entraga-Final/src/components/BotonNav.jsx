import React from 'react'
import NavButton from './NavButton'
import EquipoIdeal from './Equipo-Ideal'

const BotonNav = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      <NavButton
        label="Noticias"
        isActive={currentPage === "noticias"}
        onClick={() => setCurrentPage("noticias")}
      />
      <NavButton
        label="Resultados"
        isActive={currentPage === "resultados"}
        onClick={() => setCurrentPage("resultados")}
      />
      <NavButton
        label="Equipos"
        isActive={currentPage === "equipos"}
        onClick={() => setCurrentPage("equipos")}
      />
      <NavButton
      label= "Equipo Ideal"
      isActive={currentPage === "equipo ideal"}
      onClick={() => setCurrentPage("equipo ideal")}
      />
    </div>
  )
}

export default BotonNav
