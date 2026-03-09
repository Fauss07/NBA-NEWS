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
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [currentPage, setCurrentPage] = useState("noticias");

  // Opcional: puedes definir variantes para animaciones
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  return (
    <div className='app-contenedor'>
      <Header />
      <div className="main-content" style={{ position: "relative", minHeight: "60vh" }}>
        <AnimatePresence mode="wait">
          {currentPage === "noticias" && (
            <motion.div
              key="noticias"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{ position: "absolute", width: "100%" }}
            >
              <BusquedaNoticias />
            </motion.div>
          )}
          {currentPage === "resultados" && (
            <motion.div
              key="resultados"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Scores />
            </motion.div>
          )}
          {currentPage === "equipos" && (
            <motion.div
              key="equipos"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{ position: "absolute", width: "100%" }}
            >
              <div className="news-list">
                {equipos.map(equipo => (
                  <Team key={equipo.nombre} equipo={equipo} />
                ))}
              </div>
            </motion.div>
          )}
          {currentPage === "equipo ideal" && (
            <motion.div
              key="equipo ideal"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{ position: "relative", width: "100%" }} 
            >
              <EquipoIdeal />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  )
}

export default App


