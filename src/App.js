import React, { Component } from 'react';
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import HeroSection from './components/HeroSection'
import WorkSection from './components/WorkSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <HeroSection sectionID='hero'/>
        <AboutSection sectionID='about'/>
        <EducationSection sectionID='education'/>
        <WorkSection sectionID='work'/>
        <ContactSection sectionID='contact'/>
        <Footer sectionID='footer'/>
      </div>
    );
  }
}

export default App;
