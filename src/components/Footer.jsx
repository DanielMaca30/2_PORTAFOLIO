import React from 'react';
import { FaInstagram, FaTiktok, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h3>¡Contactame!</h3>
      <div className="social-icons">
        <a href="[Link de Instragram]"><FaInstagram size={30} /></a>
        <a href="[Link de Tiktok]"><FaTiktok size={30} /></a>
        <a href="[Link de Discord]"><FaDiscord size={30} /></a>
        <a href="[Link de GitHub]"><FaGithub size={30} /></a>
      </div>
    </footer>
  );
};

export default Footer;
