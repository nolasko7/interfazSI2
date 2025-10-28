import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='navBar'>
      <Link to="/suscribirse" className="boton">Suscribirse</Link>
      <Link to="/login" className="boton">Iniciar Sesión</Link>
    </nav>
  );
}

