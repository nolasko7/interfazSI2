import React from 'react'
import { Link } from 'react-router-dom'

// Extraído de tu 'Home' original (que estaba en main.jsx).
export default function NavBar() {
  return (
    <nav className='navBar'>
      <button className='boton'>Suscribirse</button>
      <Link to="/login" className="boton">Iniciar Sesión</Link>
    </nav>
  )
}

