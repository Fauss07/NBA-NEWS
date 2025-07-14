
import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import BottomNav from "./components/BotonNav";
import Teams from './components/Team';
import Scores from './components/Score';
import Footer from './components/Footer';
import BusquedaNoticias from './components/BusquedaNews';
function App() {
  const [currentPage, setCurrentPage] = useState("noticias");
  return (
    <>
      <div>
        <Header />
        {currentPage === "noticias" && <BusquedaNoticias />}
        {currentPage === "resultados" && <Scores />}
        {currentPage === "equipos" && <Teams />}
        <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Footer/>
      </div>  
    </>
  )
}
  
  export default App


