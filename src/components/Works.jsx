import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Works = () => {
  return (
    <section id="works">
      <h2>My Works</h2>
      <Carousel className="carousel">
  <div className="work-item">
    <img src="https://via.placeholder.com/400x300" alt="Work 1" />
    <div className="legend-container">
      <p className="legend">Trabajo #1: sin nombre</p>
      <a href="https://github.com/DanielMaca30/clase_1-jueves/tree/hotfix" target="_blank" rel="noopener noreferrer">
        <button className="repo-button">Ver repositorio</button>
      </a>
    </div>
  </div>
  <div className="work-item">
    <img src="https://via.placeholder.com/400x300" alt="Work 2" />
    <div className="legend-container">
      <p className="legend">Trabajo 2</p>
      <a href="https://github.com/maca/trabajo2" target="_blank" rel="noopener noreferrer">
        <button className="repo-button">Ver repositorio</button>
      </a>
    </div>
  </div>
</Carousel>
    </section>
  );
};

export default Works;
