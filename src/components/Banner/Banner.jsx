import './Banner.css';
import miFoto from '../../assets/miFoto.png'; // Asegúrate de colocar tu foto aquí o cambiar el nombre

const Banner = () => {
  return (
    <section className="hero-section" id="sobre-mi">
      <div className="hero-content">
        
        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img 
            src={miFoto} 
            alt="Foto de Perfil" 
            className="profile-photo"
          />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          Jazmin <br />
          <span className="text-cyan">Narvay</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Ingeniería de Software con IA | Desarrolladora Full-Stack & UI/UX Designer
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Construyo sistemas inteligentes que automatizan procesos, analizan datos y transforman la información. También desarrollo aplicaciones web funcionales y experiencias visuales atractivas para resolver necesidades reales.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      {/* 7. Indicador de Scroll */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;