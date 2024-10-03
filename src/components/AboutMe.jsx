import React from 'react';
import myImage from '../assets/Daniel 2.jpg'; 

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="image-container">
        <img 
          src={myImage} 
          alt="Daniel Maca" 
          className="profile-pic" 
        />
      </div>
      <div className="info-container">
        <h1>Daniel Maca</h1>
        <p>@Maxcurria</p>
        <ul>
          <li>2+ años de experiencia</li>
          <li>10+ apps creadas</li>
          <li>700+ seguidores</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
