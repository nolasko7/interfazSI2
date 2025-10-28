import React, { useState, useEffect } from 'react';
import pelicula from './assets/pelicula005.jpg'
import pelicula1 from './assets/pelicula003.jpg'
import pelicula2 from './assets/pelicula004.jpg'

const images = [
  pelicula, // Imagen de prueba 1
  pelicula1, // Imagen de prueba 2
  pelicula2, // Imagen de prueba 3
];

const slides = [
  images[images.length - 1], // El clon de la última
  ...images,                         // Las 3 reales
  images[0]                          // El clon de la primera
];

export default function HeroSlider() {
  // 3. Empezamos en el índice 1 (la primera imagen REAL)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 4. Handlers de botones (simples)
  const handleNext = () => {
    // No hacer nada si ya se está moviendo (evita clics múltiples)
    if (!isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  // 5. EL TRUCO: Se ejecuta cuando la transición CSS termina
  const handleTransitionEnd = () => {
    // Si llegamos al clon de la primera (al final del array)
    if (currentIndex === slides.length - 1) {
      setIsTransitioning(false); // Apagar la transición
      setCurrentIndex(1); // Saltar a la primera imagen REAL
    }
    
    // Si llegamos al clon de la última (al principio del array)
    if (currentIndex === 0) {
      setIsTransitioning(false); // Apagar la transición
      setCurrentIndex(slides.length - 2); // Saltar a la última imagen REAL
    }
  };

  // 6. Efecto para reactivar la transición después de un salto
  useEffect(() => {
    // Si isTransitioning es falso, significa que acabamos de "saltar"
    // y necesitamos reactivarla para el siguiente clic del usuario.
    if (!isTransitioning) {
      // Damos un respiro al navegador para que procese el salto
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentIndex]);

  // 7. Definir el estilo de la transición dinámicamente
  // Si estamos "saltando", la transición es 'none'.
  // Si nos estamos moviendo, dura 0.5s.
  const transitionStyle = isTransitioning 
    ? 'transform 0.5s ease-in-out' 
    : 'none';

  return (
    <div className='contenedor-lista'>
      <button className='boton-lista izquierda' onClick={handlePrev}>&lt;</button>
      
      <div 
        className='listas' 
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionStyle // <-- Aplicamos el estilo dinámico
        }}
        onTransitionEnd={handleTransitionEnd} // <-- Evento clave
      >
        {slides.map((src, index) => (
          // Usamos el 'src' directamente (es la URL del placeholder)
          <a href='https://www.google.com' key={index} className="lista-link">
            <img
              className='lista-imagen'
              src={src} 
              alt={`Slide ${index}`}
            />
          </a>
        ))}
      </div>

      <button className='boton-lista derecha' onClick={handleNext}>&gt;</button>
    </div>
  );
}

