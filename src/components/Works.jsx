import React from 'react';
import { FaCode, FaPalette, FaMusic, FaFileAlt } from 'react-icons/fa'; // Ejemplos de íconos

const Works = () => {
  const works = [
    {
      icon: <FaCode size={40} />, // Cambia el tamaño para que se vea más prominente
      title: "Clase 2: Implementación de contenidos multimedia y formularios.",
      repoLink: "https://github.com/DanielMaca30/clase-2",
    },
    {
      icon: <FaPalette size={40} />,
      title: "Clase 3: Exploración de CSS y práctica de cambio de resoluciones",
      repoLink: "https://github.com/DanielMaca30/css-caracteristicas-jueves",
    },
    {
      icon: <FaMusic size={40} />,
      title: "Clase 4: Creación de portafolio",
      repoLink: "https://github.com/DanielMaca30/Portafolio",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Clase 5: Clase virtual",
      repoLink: "https://github.com/DanielMaca30/primer-proyecto-react",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Clase 6: Desarrollo de contador",
      repoLink: "https://github.com/DanielMaca30/9-septiembre/tree/main",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Clase 7: Implementación de componentes en React",
      repoLink: "https://github.com/DanielMaca30/26_sept_video/tree/main",
    },
  ];

  return (
    <section id="works">
      <h2>Trabajos</h2>
      <div className="works-container">
        {works.map((work, index) => (
          <div 
            key={index} 
            className="work-item" 
            onClick={() => window.open(work.repoLink, '_blank')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              flexDirection: 'column', 
              margin: '10px', 
              width: '30%', // Tres en una fila
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)', // Estilo de borde
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fondo traslúcido
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave
            }}
          >
            <div className="work-icon" style={{ marginBottom: '5px' }}>{work.icon}</div>
            <p style={{ textAlign: 'center' }}>{work.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
