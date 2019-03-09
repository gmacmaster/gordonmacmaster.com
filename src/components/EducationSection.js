import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import uvm from '../uvm3.svg'
import woodstock from '../woodstock.png'

class EducationSection extends Component {
    render() {
        return (
            <div id={this.props.sectionID} className="Page-Section bg-light">
                <div style={{paddingTop: '5%'}}>
                    <h1 style={{  fontSize: '60px', fontWeight: 400, lineHeight: 1.2}}>
                        Education
                    </h1>
                    <img src={uvm} alt="University of Vermont Logo" className="uvmlogo"/>
                    <h2><strong>University of Vermont,</strong> Burlington, VT</h2>
                    <h4>College of Engineering and Mathematical Sciences</h4>
                    <h4>UVM Honors College</h4>
                    <h5>Computer Science and Information Systems</h5>
                    <h5>2016-Present</h5>
                    <br />
                    <img src={woodstock} alt="Woodstock Logo" className="woodstocklogo"/>
                    <h2><strong>Woodstock Union Highschool,</strong> Woodstock, VT</h2>
                    <h4>Salutatorian</h4>
                    <h4 style={{paddingBottom: '10px'}}>2012-2016</h4>
                </div>
            </div>
        );
    }
}

EducationSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default EducationSection;
