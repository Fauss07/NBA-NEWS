import React from 'react'
import NavButton from './NavButton'

const BotonNav = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      <NavButton
        label="Noticias"
        icon="📰"
        isActive={currentPage === "noticias"}
        onClick={() => setCurrentPage("noticias")}
      />
      <NavButton
        label="Resultados"
        icon="📊"
        isActive={currentPage === "resultados"}
        onClick={() => setCurrentPage("resultados")}
      />
      <NavButton
        label="Equipos"
        icon="👕"
        isActive={currentPage === "equipos"}
        onClick={() => setCurrentPage("equipos")}
      />
    </div>
  )
}

export default BotonNav
