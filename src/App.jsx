import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './Home.jsx';
import Login from './Login.jsx';
import DetallePelicula from './DetallePelicula.jsx';
import SeleccionButacas from './SeleccionButacas.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pelicula/:id" element={<DetallePelicula />} />
      <Route 
          path="/comprar/:id/:dia/:horario" 
          element={<SeleccionButacas />} 
        />
    </Routes>
  );
}
