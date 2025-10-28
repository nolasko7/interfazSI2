import React from 'react'
import NavBar from './NavBar.jsx' // <-- Ruta actualizada
import HeroSlider from './HeroSlider.jsx' // <-- Ruta actualizada
import Cartelera from './Cartelera.jsx' // <-- Ruta actualizada

/*
 * Ensambla los componentes.
 */
export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSlider />
      <Cartelera />
    </>
  )
}
