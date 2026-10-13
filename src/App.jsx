// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/Alumnocard';

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Directorio de Alumnos</h2>
        
        {/* PRIMERA FILA (3 tarjetas) */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="Daniel Puccio" 
            carrera="Desarrollo de Software" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Maria Perez" 
            carrera="Diseño Gráfico" 
            estado="Inactivo" 
          />
          <AlumnoCard 
            nombre="Carlos Mendoza" 
            carrera="Administración Industrial" 
            estado="Matriculado" 
          />
        </div>

        {/* SEGUNDA FILA (3 tarjetas más) */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="Jazmin Narvay" 
            carrera="Ingeniería de Software con IA" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Lucia Gomez" 
            carrera="Redes y Seguridad" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Mateo Torres" 
            carrera="Mecatrónica Industrial" 
            estado="Inactivo" 
          />
        </div>
      </div>
    </>
  );
}

export default App;