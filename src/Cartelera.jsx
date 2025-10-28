import React from 'react';
import PeliculaCard from './PeliculaCard.jsx';
import { peliculasData } from './data/mockData.js';

export default function Cartelera() {
  return (
    <div className="cartelera">
      <h2 className="titulo-cartelera">🎬 EN CARTELERA</h2>
      <div className="peliculas">
        {/* Usamos .map() para crear una Card por cada película */}
        {peliculasData.map(pelicula => (
          <PeliculaCard
            key={pelicula.id} // Key es importante para React
            id={pelicula.id}
            nombre={pelicula.nombre}
            genero={pelicula.genero}
            imagen={pelicula.imagen} // La imagen viene de los datos
          />
        ))}
      </div>
    </div>
  );
}

