import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Login from './Login.jsx'  // importamos el componente Login

function Home() {
  return (
    <>
      <nav className='navBar'>
        <button className='boton'>Suscribirse</button>
        <Link to="/login" className="boton">Iniciar Sesión</Link>
      </nav>

      <div className='contenedor-lista'>
        <button className='boton-lista izquierda'>&lt;</button>
        <button className='boton-lista derecha'>&gt;</button>

        <div className='listas'>
          <a href='https://www.google.com'>
            <img
              className='lista-imagen'
              src='src/assets/pelicula.jpg'
              alt='barbie la pelicula'
            />
          </a>
        </div>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
