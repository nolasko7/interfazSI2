// Usamos un placeholder genérico de internet
const placeholderImg = 'https://placehold.co/400x600/d00000/fafafa?text=Pelicula';
import pelicula from '../assets/pelicula005.jpg'
import pelicula1 from '../assets/pelicula003.jpg'
import pelicula2 from '../assets/pelicula004.jpg'

export const peliculasData = [
  {
    id: 1,
    nombre: "A PESAR DE TI - 2D CAST",
    genero: "★ Drama",
    imagen: placeholderImg,
    director: "Juan Pérez",
    sinopsis: "Una emocionante historia de superación y drama familiar.",
    funciones: {
      dias: ["Lunes", "Martes", "Miércoles"],
      horarios: ["19:00", "21:30", "23:00"]
    }
  },
  {
    id: 2,
    nombre: "CHAINSAW MAN LA PELÍCULA",
    genero: "★ Animé",
    imagen: placeholderImg,
    director: "Ryu Nakayama",
    sinopsis: "Denji y Pochita se enfrentan a nuevos demonios en esta aventura.",
    funciones: {
      dias: ["Lunes", "Martes"],
      horarios: ["18:00", "20:30", "22:45"]
    }
  },
  {
    id: 3,
    nombre: "PELÍCULA GENÉRICA",
    genero: "★ Acción",
    imagen: placeholderImg,
    director: "Michael Bay",
    sinopsis: "Explosiones, persecuciones y mucha acción.",
    funciones: {
      dias: ["Viernes", "Sábado", "Domingo"],
      horarios: ["17:00", "19:45", "22:15"]
    }
  }
];

