import React, { Component } from 'react';
import PageSection from './components/PageSection'
import HeroSection from './components/HeroSection'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
              <div className="container">
                  <a className="navbar-brand logo" href="index.html">
                      <img src="images/logo.png" alt="" className="img-fluid logo-light" />
                          <img src="images/logo-dark.png" alt="" className="img-fluid logo-dark" />
                  </a>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="mdi mdi-menu"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item active">
                              <a href="#home" className="nav-link">Home</a>
                          </li>
                          <li className="nav-item">
                              <a href="#about" className="nav-link">About</a>
                          </li>
                          <li className="nav-item">
                              <a href="#services" className="nav-link">Services</a>
                          </li>
                          <li className="nav-item">
                              <a href="#education" className="nav-link">Education</a>
                          </li>
                          <li className="nav-item">
                              <a href="#work" className="nav-link">Work</a>
                          </li>
                          <li className="nav-item">
                              <a href="#client" className="nav-link">Client</a>
                          </li>
                          <li className="nav-item">
                              <a href="#blog" className="nav-link">Blog</a>
                          </li>
                          <li className="nav-item">
                              <a href="#contact" className="nav-link">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        <HeroSection sectionID='hero'/>
        <PageSection sectionID='about'/>
        <PageSection sectionID='experience'/>
        <PageSection sectionID='contact'/>
      </div>
    );
  }
}

export default App;
