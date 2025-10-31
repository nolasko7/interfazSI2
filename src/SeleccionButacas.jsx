import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { peliculasData } from './data/mockData.js'; 

// Función para generar el nombre de la butaca (A1, A2...)
const getSeatName = (rowIndex, seatIndex) => {
  const rowName = String.fromCharCode(65 + rowIndex); // A, B, C...
  return `${rowName}${seatIndex + 1}`;
};

export default function SeleccionButacas() {
  const { id, dia, horario } = useParams();
  const navigate = useNavigate();
  
  // 1. Encontrar la película y los datos de la sala
  // usamos '==' con id porque el param viene como string
  const pelicula = peliculasData.find(p => p.id == id); 
  
  // Estado para guardar las butacas seleccionadas por el usuario
  const [selectedAsientos, setSelectedAsientos] = useState([]);

  // Si no se encuentra la película (ej: ID inválido), mostramos un error
  if (!pelicula || !pelicula.funciones.sala) {
    return (
      <div className="sala-container">
        <h2>Error</h2>
        <p>No se encontró la función para esta película.</p>
        <button onClick={() => navigate('/')} className="boton-pagar">Volver al inicio</button>
      </div>
    );
  }

  const { layout, ocupados } = pelicula.funciones.sala;
  const precio = pelicula.precio;

  // 2. Lógica para manejar el clic en una butaca
  const handleSelectButaca = (seatName) => {
    // Si ya estaba seleccionada, la quitamos (deselect)
    if (selectedAsientos.includes(seatName)) {
      setSelectedAsientos(prevSelected => 
        prevSelected.filter(s => s !== seatName)
      );
    } else {
      // Si no estaba seleccionada, la añadimos
      setSelectedAsientos(prevSelected => 
        [...prevSelected, seatName]
      );
    }
  };

  // 3. Renderizado del componente
  return (
    <div className="sala-container">
      {/* Info de la película y función */}
      <div className="sala-info">
        <h2>{pelicula.titulo}</h2>
        <p>Función: {dia} a las {horario} hs</p>
      </div>

      {/* Pantalla del cine */}
      <div className="pantalla">PANTALLA</div>

      {/* Layout de la sala */}
      <div className="sala-layout">
        {layout.map((fila, rowIndex) => (
          <div key={rowIndex} className="fila-butacas">
            {fila.map((tipoButaca, seatIndex) => {
              
              // Si es 0, es un pasillo (espacio vacío)
              if (tipoButaca === 0) {
                return <div key={seatIndex} className="butaca pasillo"></div>;
              }

              // Si es 1, es una butaca real.
              const seatName = getSeatName(rowIndex, seatIndex);
              let status = 'disponible';
              
              if (ocupados.includes(seatName)) {
                status = 'ocupada';
              } else if (selectedAsientos.includes(seatName)) {
                status = 'seleccionada';
              }

              return (
                <div 
                  key={seatName} 
                  className={`butaca ${status}`}
                  // Solo permitimos clic si NO está ocupada
                  onClick={() => status !== 'ocupada' && handleSelectButaca(seatName)}
                >
                  {seatName}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Leyenda de colores */}
      <div className="leyenda">
        <div className="leyenda-item">
          <div className="leyenda-color" style={{ backgroundColor: '#e0e0e0' }}></div>
          <span>Disponible</span>
        </div>
        <div className="leyenda-item">
          <div className="leyenda-color" style={{ backgroundColor: '#7d26c9' }}></div>
          <span>Seleccionada</span>
        </div>
        <div className="leyenda-item">
          <div className="leyenda-color" style={{ backgroundColor: '#666' }}></div>
          <span>Ocupada</span>
        </div>
      </div>

      {/* Resumen de la compra */}
      <div className="resumen-compra">
        <p className="resumen-total">
          Total: <span>${selectedAsientos.length * precio}</span>
        </p>
        <button 
          className="boton-pagar" 
          disabled={selectedAsientos.length === 0}
          onClick={() => alert('Ir a la pasarela de pago...')}
        >
          Pagar ({selectedAsientos.length} {selectedAsientos.length === 1 ? 'entrada' : 'entradas'})
        </button>
      </div>

    </div>
  );
}

