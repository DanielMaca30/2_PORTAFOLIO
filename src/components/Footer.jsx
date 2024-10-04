import React from 'react';
import { FaInstagram, FaTiktok, FaSpotify, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>¡Contactame!</h3>
      <div className="social-icons">
        <a href="https://www.instagram.com/daniel.maca_/"><FaInstagram size={30} /></a>
        <a href="https://www.tiktok.com/@daniel.maca?_t=8p6THZe4YNh&_r=1"><FaTiktok size={30} /></a>
        <a href="https://open.spotify.com/user/19jr1dks22avp7rxnjzsh9tn1?si=yAb8letER-6gplfET8PYEQ"><FaSpotify size={30} /></a>
        <a href="https://github.com/DanielMaca30?tab=repositories"><FaGithub size={30} /></a>
      </div>
    </footer>
  );
};

export default Footer;
