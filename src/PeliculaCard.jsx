import React from 'react';
import { Link } from 'react-router-dom';

export default function PeliculaCard({ id, imagen, nombre, genero }) {
  return (
    <Link to={`/pelicula/${id}`} className="pelicula-link">
      <div className="pelicula">
        <img src={imagen} alt={nombre} className="poster" />
        <p className="nombre">{nombre}</p>
        <p className="genero">{genero}</p>
      </div>
    </Link>
  );
}

