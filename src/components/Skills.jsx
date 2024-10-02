import React from 'react';
import { FaCode, FaUserFriends } from 'react-icons/fa'; // Ejemplo de iconos

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-section">
        <div className="skill">
          <FaCode size={30} />
          <h3>Habilidades Duras</h3>
          <ul>
            <li>Desarrollo web</li>
            <li>Edición de video</li>
            <li>Diseño gráfico</li>
            <li>Modelado 3D</li>
            <li>Desarrollo de videojuegos</li>
            <li>Animación 2D/3D</li>
            <li>Edición de audio</li>
            <li>Fotografía y videografía</li>
            <li>Realidad aumentada y virtual (AR/VR)</li>
            <li>Diseño de UX/UI</li>
          </ul>
        </div>
        <div className="skill">
          <FaUserFriends size={30} />
          <h3>Habilidades Blandas</h3>
          <ul>
            <li>Comunicación efectiva</li>
            <li>Trabajo en equipo</li>
            <li>Creatividad</li>
            <li>Pensamiento crítico</li>
            <li>Gestión del tiempo</li>
            <li>Adaptabilidad</li>
            <li>Resolución de conflictos</li>
            <li>Empatia</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
