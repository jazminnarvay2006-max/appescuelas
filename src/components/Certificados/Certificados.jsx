import './Certificados.css';

const Certificados = () => {
  // Arreglo de certificados (puedes agregar más o cambiar la información según necesites)
  const certificadosData = [
    {
      id: 1,
      titulo: "Full Stack Web Development",
      institucion: "SENATI",
      fecha: "2026",
      descripcion: "Certificación en desarrollo de aplicaciones web full-stack, frontend modular en React y backend estructurado.",
      linkVer: "#"
    },
    {
      id: 2,
      titulo: "Fundamentos de Machine Learning & IA",
      institucion: "SENATI / DataExpert",
      fecha: "2026",
      descripcion: "Capacitación en algoritmos de aprendizaje automático, análisis predictivo y uso de bibliotecas de Python.",
      linkVer: "#"
    },
    {
      id: 3,
      titulo: "Administración y Modelado de Bases de Datos",
      institucion: "SENATI",
      fecha: "2025",
      descripcion: "Gestión, diseño relacional y manipulación de datos con PostgreSQL y MySQL.",
      linkVer: "#"
    }
  ];

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        <h2 className="section-title text-center">Certificaciones & Logros</h2>
        
        <div className="certificados-grid">
          {certificadosData.map((cert) => (
            <article key={cert.id} className="certificado-card">
              <div className="certificado-header">
                <div className="certificado-icon">📜</div>
                <span className="certificado-fecha">{cert.fecha}</span>
              </div>

              <h3 className="certificado-titulo">{cert.titulo}</h3>
              <p className="certificado-institucion">🏛️ {cert.institucion}</p>
              <p className="certificado-desc">{cert.descripcion}</p>

              <div className="certificado-footer">
                <a 
                  href={cert.linkVer} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-certificado"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Ver Credencial
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificados;