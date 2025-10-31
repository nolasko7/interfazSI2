import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { peliculasData } from './data/mockData.js';

export default function DetallePelicula() {
  // 1. Leemos el 'id' de la URL (ej: /pelicula/1 -> id será "1")
  const { id } = useParams();

  // 2. Buscamos la película en nuestros datos
  // Usamos parseInt(id) porque el 'id' de la URL es texto, pero en nuestros datos es número
  const pelicula = peliculasData.find(p => p.id === parseInt(id));

  // 3. Si no encontramos la película (ej: /pelicula/99)
  if (!pelicula) {
    return (
      <div className="detalle-container">
        <h2>Película no encontrada</h2>
        <Link to="/" className="detalle-volver">Volver al inicio</Link>
      </div>
    );
  }

  // 4. Si encontramos la película, la mostramos
  return (
    <div className="detalle-container">
      <img src={pelicula.imagen} alt={pelicula.nombre} className="detalle-poster" />
      <div className="detalle-info">
        <h1 className="detalle-titulo">{pelicula.nombre}</h1>
        <p className="detalle-meta"><strong>Género:</strong> {pelicula.genero}</p>
        <p className="detalle-meta"><strong>Director:</strong> {pelicula.director}</p>
        <h3 className="detalle-subtitulo">Sinopsis</h3>
        <p className="detalle-sinopsis">{pelicula.sinopsis}</p>
        <h3 className="detalle-subtitulo">Funciones</h3>
        <div className="detalle-funciones-container">
          {/* Bucle exterior para los DÍAS */}
          {pelicula.funciones.dias.map(dia => (
            <div key={dia} className="detalle-dia-grupo">
              <h4 className="detalle-dia-subtitulo">{dia}</h4>
              
              {/* Bucle interior para los HORARIOS*/}
              <div className="detalle-horarios-lista">
                {pelicula.funciones.horarios.map(horario => (
                  <Link 
                    key={horario} 
                    to={`/comprar/${pelicula.id}/${dia}/${horario}`} 
                    className="detalle-horario-link"
                  >
                    {horario} hs
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="detalle-volver">Volver al inicio</Link>
      </div>
    </div>
  );
}
