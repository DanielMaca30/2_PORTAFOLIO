  import React from 'react';
  import { Carousel } from 'react-responsive-carousel';
  import 'react-responsive-carousel/lib/styles/carousel.min.css';

  const Skills = () => {
    const softSkills = [
      "Comunicación efectiva", "Creatividad", "Pensamiento crítico", 
      "Gestión del tiempo", "Adaptabilidad", "Resolución de conflictos", "Empatía"
    ];

    const hardSkills = [
      "Desarrollo web", "Edición de video", "Diseño gráfico", 
      "Modelado 3D", "Desarrollo de videojuegos", "Animación 2D/3D", 
      "Edición de audio", "Fotografía y videografía", "Realidad aumentada y virtual (AR/VR)", "Diseño de UX/UI"
    ];

    return (
      <Carousel
          showArrows={true} 
          showThumbs={false} 
          infiniteLoop={true} 
          autoPlay={true} 
          className="carousel"
        >
          <div>
            <h3>Habilidades Blandas</h3>
            <ul className="skills-list">
              {softSkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div>
            <h3>Habilidades Duras</h3>
            <ul className="skills-list">
              {hardSkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </Carousel>
    );
  };

  export default Skills;
