import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PageSection extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id={this.props.sectionID} className="Page-Section">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

PageSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default PageSection;
