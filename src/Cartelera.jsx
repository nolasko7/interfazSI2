import React from 'react'
import PeliculaCard from './PeliculaCard.jsx'

// Tus variables 'pelicula1', 'pelicula2' no estaban definidas en el 'Home' original.
// La forma correcta en React es tener un array de datos y "mapearlo".
// Usaré placeholders para las imágenes.
const peliculas = [
  {
    id: 1,
    imagen: 'https://placehold.co/200x300/E8D5C4/333?text=A+Pesar+de+Ti',
    nombre: 'A PESAR DE TI - 2D CAST',
    genero: '★ Drama'
  },
  {
    id: 2,
    imagen: 'https://placehold.co/200x300/D4E2D4/333?text=Chainsaw+Man',
    nombre: 'CHAINSAW MAN LA PELÍCULA',
    genero: '★ Animé'
  },
  {
    id: 3,
    imagen: 'https://placehold.co/200x300/F1F0E8/333?text=Película',
    nombre: 'PELÍCULA GENÉRICA',
    genero: '★ Acción'
  }
]

// El componente 'Cartelera' ahora es un contenedor
export default function Cartelera() {
  return (
    <div className="cartelera">
      <h2 className="titulo-cartelera">🎬 EN CARTELERA</h2>
      <div className="peliculas">
        {/* Mapeamos el array y por cada item, renderizamos PeliculaCard */}
        {peliculas.map((pelicula) => (
          <PeliculaCard
            key={pelicula.id}
            imagen={pelicula.imagen}
            nombre={pelicula.nombre}
            genero={pelicula.genero}
          />
        ))}
      </div>
    </div>
  )
}

