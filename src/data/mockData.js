// Usaremos URLs de placeholder para evitar errores de importación
const placeholderImg1 = 'https://placehold.co/400x600/333/FFF?text=Película+1';
const placeholderImg2 = 'https://placehold.co/400x600/444/FFF?text=Película+2';
const placeholderImg3 = 'https://placehold.co/400x600/555/FFF?text=Película+3';

// Definición de una sala de cine
// 0 = Pasillo, 1 = Disponible
const salaLayout = [
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
];

export const peliculasData = [
  {
    id: 1,
    nombre: 'Duna: Parte Dos',
    genero: '★ Ciencia Ficción',
    sinopsis: 'Paul Atreides se une a los Fremen y comienza un viaje espiritual y marcial para convertirse en Muad\'Dib, mientras intenta evitar el horrible pero inevitable futuro que ha presenciado: una Guerra Santa en su nombre...',
    imagen: placeholderImg1,
    precio: 10,
    funciones: {
      dias: ['Lunes', 'Martes'],
      horarios: ['19:00', '21:30'],
      // Definimos la sala para esta película y función
      sala: {
        layout: salaLayout,
        ocupados: ['A1', 'A2', 'C4', 'D5'] // Asientos ya comprados
      }
    }
  },
  {
    id: 2,
    nombre: 'El Especialista',
    genero: '★ Acción/Comedia',
    sinopsis: 'Un doble de acción, que acaba de superar un accidente que casi acaba con su carrera, se ve obligado a seguir la pista de una estrella de cine desaparecida, resolver una conspiración y tratar de recuperar al amor de su vida...',
    imagen: placeholderImg2,
    precio: 12,
    funciones: {
      dias: ['Lunes', 'Miércoles', 'Viernes'],
      horarios: ['18:00', '20:30', '22:00'],
      sala: {
        layout: salaLayout,
        ocupados: ['B3', 'B4', 'C1', 'E8']
      }
    }
  },
  {
    id: 3,
    nombre: 'Mi Villano Favorito 4',
    genero: '★ Animación',
    sinopsis: 'Gru, Lucy, Margo, Edith y Agnes dan la bienvenida a un nuevo miembro de la familia, Gru Jr., que se empeña en atormentar a su padre. Gru se enfrenta a nuevos némesis, Maxime Le Mal y su novia Valentina.',
    imagen: placeholderImg3,
    precio: 8,
    funciones: {
      dias: ['Sábado', 'Domingo'],
      horarios: ['17:00', '19:30'],
      sala: {
        layout: salaLayout,
        ocupados: ['F2', 'F3', 'A5', 'A6', 'C8']
      }
    }
  },
];

