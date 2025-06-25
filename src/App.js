import './App.css';
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';     
import About from './components/about';  
import Projects from './components/projects';
import Contact from './components/contect';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
