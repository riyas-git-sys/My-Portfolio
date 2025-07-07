import './App.css';
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';     
import About from './components/about';  
import Projects from './components/projects';
import Contact from './components/contect';
import Footer from './components/footer';
import MessageMe from './components/messageme';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects />
      <Contact />
      <MessageMe />
      <Footer />
    </>
  );
}

export default App;
