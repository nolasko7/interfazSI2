// Usamos un placeholder genérico de internet para evitar errores de importación
const placeholderImg = 'https://placehold.co/400x600/d00000/fafafa?text=Pelicula';
import pelicula from '../assets/pelicula005.jpg'
import pelicula1 from '../assets/pelicula003.jpg'
import pelicula2 from '../assets/pelicula004.jpg'

// Ahora nuestros datos tienen más detalles (sinopsis, director)
export const peliculasData = [
  {
    id: 1,
    nombre: "A PESAR DE TI - 2D CAST",
    genero: "★ Drama",
    imagen: placeholderImg,
    director: "Juan Pérez",
    sinopsis: "Una emocionante historia de superación y drama familiar."
  },
  {
    id: 2,
    nombre: "CHAINSAW MAN LA PELÍCULA",
    genero: "★ Animé",
    imagen: placeholderImg,
    director: "Ryu Nakayama",
    sinopsis: "Denji y Pochita se enfrentan a nuevos demonios en esta aventura."
  },
  {
    id: 3,
    nombre: "PELÍCULA GENÉRICA",
    genero: "★ Acción",
    imagen: placeholderImg,
    director: "Michael Bay",
    sinopsis: "Explosiones, persecuciones y mucha acción."
  }
];
