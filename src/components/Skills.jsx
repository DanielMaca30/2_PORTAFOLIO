// src/components/Skills.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Skills = () => {
  const softSkills = [
    "Comunicación efectiva",
    "Creatividad",
    "Pensamiento crítico",
    "Gestión del tiempo",
    "Adaptabilidad",
    "Resolución de conflictos",
    "Empatía",
  ];

  const hardSkills = [
    "Desarrollo web",
    "Edición de video",
    "Diseño gráfico",
    "Modelado 3D",
    "Desarrollo de videojuegos",
    "Animación 2D/3D",
    "Edición de audio",
    "Fotografía y videografía",
    "Realidad aumentada y virtual (AR/VR)",
    "Diseño de UX/UI",
  ];

  return (
    <section id="skills">
      <h2>Habilidades Blandas</h2>
      <ul className="soft-skills">
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Habilidades Duras</h2>
      <Carousel className="carousel">
        {hardSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <p>{skill}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Skills;
