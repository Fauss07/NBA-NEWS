import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const texto = "NBA NEWS"

const Header = () => {
  const [displayed, setDisplayed] = useState("")
  const [escribiendo, setEscribiendo] = useState(true)

  useEffect(() => {
    let i = 0
    setDisplayed("")
    const interval = setInterval(() => {
      setDisplayed(texto.slice(0, i + 1))
      i++
      if (i > texto.length) {
        clearInterval(interval)
        setEscribiendo(false)
      }
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='Header'>
      <motion.h1
        initial={{ scale: 0.8, opacity: 0, y: -30 }}
        animate={{
          scale: [1.08, 1.13, 1.08],
          opacity: 1,
          y: 0
        }}
        transition={{
          type: "tween",
          stiffness: 180,
          damping: 12,
          delay: 0.2,
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        whileHover={{
          scale: 1.18,
          textShadow: "0 0 24px #ffa500, 0 0 8px #fff"
        }}
        style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: 2 }}
      >
        {displayed}
        <span
          className={`cursor ${escribiendo ? "" : "oculto"}`}
        >
          |
        </span>
      </motion.h1>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          .cursor {
            display: inline-block;
            width: 1ch;
            animation: blink 1s steps(1) infinite;
            transition: opacity 0.5s ease;
          }

          .oculto {
            animation: none;
            opacity: 0;
          }
        `}
      </style>
    </div>
  )
}

export default Header
