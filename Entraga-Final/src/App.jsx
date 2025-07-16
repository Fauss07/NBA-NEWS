import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import equipos from './data/Equipos'
import BottomNav from "./components/BotonNav";
import Team from './components/Team';
import Scores from './components/Score';
import Footer from './components/Footer';
import BusquedaNoticias from './components/BusquedaNews';
import EquipoIdeal from './components/Equipo-Ideal';

function App() {
  const [currentPage, setCurrentPage] = useState("noticias");
  return (
      <div className='app-contenedor'>
      <Header />
      <div className="main-content">
      {currentPage === "noticias" && <BusquedaNoticias />}
      {currentPage === "resultados" && <Scores />}
      {currentPage === "equipos" && (
        <div className="news-list">
          {equipos.map(equipo => (
            <Team key={equipo.nombre} equipo={equipo} />
          ))}
        </div>
      )}
      {currentPage === "equipo ideal" && <EquipoIdeal />}
      </div>
      <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer/>
    </div>
  )
} 

export default App


