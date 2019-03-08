import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import wordcloud from '../wordcloud.png'

class EducationSection extends Component {
    render() {
        return (
            <div id={this.props.sectionID} className="Page-Section bg-light">
                <div style={{paddingTop: '5%'}}>
                    <i className="fas fa-school" style={{fontSize: '72px'}}/>
                    <h1 style={{  fontSize: '60px', fontWeight: 400, lineHeight: 1.2}}>
                        education
                    </h1>
                    <p className="aboutParagraph">My name is Gordon MacMaster. I am a junior computer science and information science major at the University of Vermont. I have six years
                        of programing experience in various programming languages. I have interned with the Vermont Agency of Digital Services, Pennsylvania Multifamily
                        Asset Managers, and am currently interning for Tesla Motors as a Digital Products Engineer.
                    </p>
                </div>
            </div>
        );
    }
}

EducationSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default EducationSection;
