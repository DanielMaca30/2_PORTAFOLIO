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
        <h3>Daniel Maca</h3>
        <p className="blue-text">@Maxcurria</p>
        <div className="experience-line">
          <li className="a">+2 años de experiencia</li>
          <li className="a">+10 apps creadas</li>
          <li className="a">+700 seguidores</li>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
