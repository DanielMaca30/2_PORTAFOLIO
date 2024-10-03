// App.jsx

import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Works from './components/Works';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <AboutMe />
        <Skills />
        <Works />
      </main>
      <Footer />
    </div>
  );
};

export default App;
