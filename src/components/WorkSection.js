import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class WorkSection extends Component {
    render() {
        return (
            <div id={this.props.sectionID} className="Page-Section">
                <div style={{paddingTop: '5%', background: '#282c34', minHeight: '100vh', paddingBottom: '25px'}}>
                    <h1 className="header_title" style={{color: 'white', textTransform: 'lowercase'}}>work experience</h1>
                    <div className="timeline">
                        <div className="timeline-container left">
                            <div className="content">
                                <h2>2019-present</h2>
                                <h4>Software Development Intern</h4>
                                <p style={{margin: 0}}> Tesla Motors, Digital Products</p>
                                <p style={{margin: 0}}>Full stack developer. React.js, Javascript, Node.js</p>
                            </div>
                        </div>
                        <div className="timeline-container right">
                            <div className="content">
                                <h2>2018</h2>
                                <h4>Software Development Intern</h4>
                                <p style={{margin: 0}}>Pennsylvania Multifamily Asset Managers</p>
                                <p style={{margin: 0}}>Full stack developer. C#, ASP.net, MySQL</p>
                            </div>
                        </div>
                        <div className="timeline-container left">
                            <div className="content">
                                <h2>2017</h2>
                                <h4>Intern</h4>
                                <p style={{margin: 0}}>Vermont Agency of Digital Services</p>
                            </div>
                        </div>
                        <div className="timeline-container right">
                            <div className="content">
                                <h2>2017</h2>
                                <h4>Pool Director</h4>
                                <p style={{margin: 0}}>Woodstock Recreation Center</p>
                            </div>
                        </div>
                        <div className="timeline-container left">
                            <div className="content">
                                <h2>2014-present</h2>
                                <h4>Volunteer Firefighter</h4>
                                <p style={{margin: 0}}>Woodstock Fire Dept.</p>
                            </div>
                        </div>
                        <div className="timeline-container right">
                            <div className="content">
                                <h2>2013-2019</h2>
                                <h4>Ski Instructor</h4>
                                <p style={{margin: 0}}>Woodstock Inn Corporation</p>
                            </div>
                        </div>
                        <div className="timeline-container left">
                            <div className="content">
                                <h2>2013-2017</h2>
                                <h4>Lifeguard & swim instructor</h4>
                                <p style={{margin: 0}}>Woodstock Rec Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WorkSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default WorkSection;
