import React from 'react';
import { FaCode, FaPalette, FaMusic, FaFileAlt, FaWpforms, FaSubscript, FaTextHeight, FaClock, FaVideo } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';

const Works = () => {
  const works = [
    { icon: <FaCode size={30} />, title: "Implementación de contenidos multimedia", repoLink: "https://github.com/DanielMaca30/clase-2" },
    { icon: <FaTextHeight size={30} />, title: "Exploración de CSS", repoLink: "https://github.com/DanielMaca30/css-caracteristicas-jueves" },
    { icon: <FaWpforms size={30} />, title: "Formulario de informacion", repoLink: "https://github.com/edwinmgallego/clase-practica-css-jueves/tree/maca/dfmaca2215968" },
    { icon: <FaComputer size={30} />, title: "Clase virtual: Exploracion de JS", repoLink: "https://github.com/DanielMaca30/9-septiembre/tree/main" },
    { icon: <FaClock size={30} />, title: "Desarrollo de contador", repoLink: "https://github.com/DanielMaca30/primer-proyecto-react/tree/main" },
    { icon: <FaVideo size={30} />, title: "Implementacion de videos con componentes", repoLink: "https://github.com/DanielMaca30/26_sept_video" },
  ];

  return (
    <section id="works" className='works'>
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
