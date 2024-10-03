import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="works" smooth={true} duration={500}>Works</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
