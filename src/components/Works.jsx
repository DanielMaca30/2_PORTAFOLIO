import React from 'react';
import { FaCode, FaPalette, FaMusic, FaFileAlt } from 'react-icons/fa';

const Works = () => {
  const works = [
    { icon: <FaCode size={30} />, title: "Implementación de contenidos multimedia", repoLink: "https://github.com/DanielMaca30/clase-2" },
    { icon: <FaPalette size={30} />, title: "Exploración de CSS", repoLink: "https://github.com/DanielMaca30/css-caracteristicas-jueves" },
    { icon: <FaMusic size={30} />, title: "Creación de portafolio", repoLink: "https://github.com/DanielMaca30/Portafolio" },
    { icon: <FaFileAlt size={30} />, title: "Desarrollo de contador", repoLink: "https://github.com/DanielMaca30/9-septiembre/tree/main" },
  ];

  return (
    <section id="works" className='Works'>
      <h2>Trabajos</h2>
      <ul className="works-list">
        {works.map((work, index) => (
          <li key={index} onClick={() => window.open(work.repoLink, '_blank')}>
            {work.icon} <span>{work.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
