import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx' // Importamos el nuevo App
import './index.css' // Estilos globales

// Tu main.jsx ahora es súper limpio.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter envuelve a TODA tu aplicación */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

