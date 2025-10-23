import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <>
    <nav className = 'navBar'>
      <button className = 'boton'> Suscribirse </button>
      <button className = 'boton'> Iniciar Sesion </button>
    </nav>
    
    <div>
      <div className = 'contenedor-lista'>
        <button className = 'boton-lista izquierda'>
           &lt;
        </button>
        <button className = 'boton-lista derecha'>
           &gt;
        </button>
        <div className = 'listas'>
          <a href = 'https://www.google.com'>
            <img className = 'lista-imagen' src = 'src\assets\pelicula.jpg' alt = 'barbie la pelicula'></img>
          </a>
        </div>
      </div>
    </div>
  </>
)
