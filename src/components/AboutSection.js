import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import logo from '../logo.png'
import wordcloud from '../wordcloud.png'

class AboutSection extends Component {
    render() {
        return (
            <div id={this.props.sectionID} className="Page-Section">
                <div style={{paddingTop: '5%'}}>
                    <img src={logo} alt="Logo" style={{maxHeight: '150px'}}/>
                    <h1 style={{  fontSize: '60px', fontWeight: 400, lineHeight: 1.2}}>
                        I Am A Full Stack Developer
                    </h1>
                    <p className="aboutParagraph">My name is Gordon MacMaster. I am a junior computer science and information science major at the University of Vermont. I have six years
                        of programming experience in various languages and frameworks. I have interned with the Vermont Agency of Digital Services, Pennsylvania Multifamily
                        Asset Managers, and am currently interning for Tesla Motors as a Digital Products Engineer. I am interested in all aspects of computer science from
                        front end design to machine learning and everything in between.
                    </p>
                    <img src={wordcloud} alt="wordcloud" className="wordcloud"/>
                </div>
            </div>
        );
    }
}

AboutSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default AboutSection;
