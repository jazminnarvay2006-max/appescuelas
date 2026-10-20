import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="perfil-section">
      <div className="perfil-container">
        <h2 className="section-title text-center">Sobre mí</h2>
        
        <div className="perfil-grid">
          {/* Tarjeta 1: Perfil Profesional */}
          <div className="perfil-card">
            <h3 className="perfil-card-title">
              <span className="text-cyan">👤</span> Perfil profesional
            </h3>
            <p className="perfil-text">
              Estudiante de Ingeniería de Software con IA en SENATI. Comprometida con el desarrollo de soluciones tecnológicas inteligentes, automatización de procesos y creación de aplicaciones web modernas orientadas a la experiencia del usuario.
            </p>
          </div>

          {/* Tarjeta 2: Educación */}
          <div className="perfil-card">
            <h3 className="perfil-card-title">
              <span className="text-cyan">🎓</span> Educación
            </h3>
            <ul className="perfil-list">
              <li>
                <strong>Ingeniería de Software con IA</strong>
                <span>SENATI (En curso)</span>
              </li>
              <li>
                <strong>Desarrollo Full-Stack & Base de Datos</strong>
                <span>Módulos prácticos y proyectos integradores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;