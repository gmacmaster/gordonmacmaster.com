import React, { Component } from 'react';
import PageSection from './components/PageSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <HeroSection sectionID='hero'/>
        <PageSection sectionID='about'/>
        <PageSection sectionID='experience'/>
        <PageSection sectionID='contact'/>
        <Footer/>
      </div>
    );
  }
}

export default App;
