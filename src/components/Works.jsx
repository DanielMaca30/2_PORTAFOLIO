import React from 'react';
import { FaCode, FaPalette, FaMusic, FaFileAlt } from 'react-icons/fa'; // Ejemplos de íconos.

const Works = () => {
  const works = [
    {
      icon: <FaCode />,
      title: "Clase 2: Implementacion de contenidos multimedia y formularios.",
      repoLink: "https://github.com/DanielMaca30/clase-2",
    },
    {
      icon: <FaPalette />,
      title: "Clase 3: Exploracion de CSS y practica de cambio de resoluciones",
      repoLink: "https://github.com/DanielMaca30/css-caracteristicas-jueves",
    },
    {
      icon: <FaMusic />,
      title: "Clase 4: Creacion de portafolio",
      repoLink: "https://github.com/DanielMaca30/Portafolio",
    },
    {
      icon: <FaFileAlt />,
      title: "Clase 5: Clase virtual",
      repoLink: "https://github.com/DanielMaca30/primer-proyecto-react",
    },
    {
      icon: <FaFileAlt />,
      title: "Clase 6: Desarrollo de contador",
      repoLink: "https://github.com/DanielMaca30/9-septiembre/tree/main",
    },
    {
      icon: <FaFileAlt />,
      title: "Clase 7: Implementacion de componentes en React",
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
          >
            <div className="work-icon">{work.icon}</div>
            <p>{work.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;