import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeActive: true,
            aboutActive: false,
            educationActive: false,
            workActive: false,
            contactActive: false,
            menuDisplayed: false,
        }

        this.setActive = this.setActive.bind(this);
        this.displayMenu = this.displayMenu.bind(this);
    }

    displayMenu(){
        this.setState({menuDisplayed: !this.state.menuDisplayed})
    }

    setActive(tab){
        this.setState({
            homeActive: false,
            aboutActive: false,
            educationActive: false,
            workActive: false,
            contactActive: false,
            menuDisplayed: false,
        }, () =>{
            switch(tab) {
                case 'about':
                    this.setState({aboutActive: true});
                    break;
                case 'education':
                    this.setState({educationActive: true});
                    break;
                case 'work':
                    this.setState({workActive: true});
                    break;
                case 'contact':
                    this.setState({contactActive: true});
                    break;
                default:
                    this.setState({homeActive: true});
            }
        })
    }

    render() {
        console.log(this.state);
        return (
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top custom-nav sticky" style={{zIndex: 9999}}>
                <div className="container">
                    <h1 id='nameHeaderH1'>Gordon</h1>
                    <button className="btn btn-light smallScreenButton" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" onClick={this.displayMenu}><i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse" style={this.state.menuDisplayed ? {display: 'inline-block'} : {display: 'none'} }>
                        <ul className="navbar-nav ml-auto">
                            <li className={this.state.homeActive ? "nav-item active" : "nav-item"}>
                                <a href="#home" className="nav-link" onClick={() => this.setActive('home')}>Home</a>
                            </li>
                            <li className={this.state.aboutActive ? "nav-item active" : "nav-item"}>
                                <a href="#about" className="nav-link" onClick={() => this.setActive('about')}>About</a>
                            </li>
                            <li className={this.state.educationActive ? "nav-item active" : "nav-item"}>
                                <a href="#education" className="nav-link" onClick={() => this.setActive('education')}>Education</a>
                            </li>
                            <li className={this.state.workActive ? "nav-item active" : "nav-item"}>
                                <a href="#work" className="nav-link" onClick={() => this.setActive('work')}>Work</a>
                            </li>
                            <li className={this.state.contactActive ? "nav-item active" : "nav-item"}>
                                <a href="#contact" className="nav-link" onClick={() => this.setActive('contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
