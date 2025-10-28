import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx' // Este archivo lo creamos ahora
import Login from './Login.jsx' // Este archivo lo movemos y creamos ahora

/*
 * App.jsx es el componente principal.
 * Su única responsabilidad es manejar las rutas (el "Router").
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App

