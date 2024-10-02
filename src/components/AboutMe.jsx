import React from 'react';
import myImage from '../assets/Daniel 2.jpg'; 

const AboutMe = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={myImage} alt="Daniel Maca" style={{ width: '1280px', height: '1280px', borderRadius: '15px', marginBottom: '20px' }} />
      <h1>Daniel Maca</h1>
      <p>
        ¡Mi nombre es "Daniel Maca", soy un ingeniero multimedia de la Universidad Autónoma de Occidente de la ciudad de Santiago de Cali, Colombia. Tengo 20 años 
        y, en mis 7 semestres cursados, siento que he desarrollado habilidades en muchos campos, como el diseño, audio y video, videojuegos y muchos más, 
        pero diría que las experiencias web son mi fuerte, ya que logro desenvolverme bastante bien en esta área!
      </p>
    </section>
  );
};

export default AboutMe;