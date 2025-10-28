import React from 'react'

/*
 * La tarjeta individual de película.
 * No necesita importar nada.
 */
export default function PeliculaCard({ imagen, nombre, genero }) {
  return (
    <div className="pelicula">
      <img src={imagen} alt={nombre} className="poster" />
      <p className="nombre">{nombre}</p>
      <p className="genero">{genero}</p>
    </div>
  )
}
