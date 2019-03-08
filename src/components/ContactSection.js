import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import logo from '../logo.png'

class ContactSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(){
        let errors = false;
        if (this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === ''){
            errors = true;
        }
        this.setState({
            errors: errors,
        });
        if (!errors){
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
                errors: false,
            })
        }
    }
    render() {
        return (
            <div id={this.props.sectionID} className="Page-Section">
                <div style={{paddingTop: '5%'}}>
                    <img src={logo} alt="Logo" style={{maxHeight: '150px'}}/>
                    <h1 style={{  fontSize: '60px', fontWeight: 400, lineHeight: 1.2}}>
                        contact me
                    </h1>
                    <p className="contactParagraph">
                        Feel free to reach out to learn about my experience, plans for the future, or business inquiries
                    </p>
                    <div style={{maxWidth: '50%', margin: '25px auto 0 auto'}}>
                        {this.state.errors ? <div className="alert alert-danger">
                            Please enter required fields.
                        </div> : null }
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{marginTop: '35px'}}>
                                    <div>
                                        <i className="fas fa-mobile-alt fa-2x"/>
                                    </div>
                                    <div>
                                        <p style={{margin: 0}}><strong>Call me at</strong></p>
                                        <p style={{margin: 0}}><div>+802 369 9025</div></p>
                                    </div>
                                </div>
                                <div style={{marginTop: '35px'}}>
                                    <div>
                                        <i className="far fa-envelope fa-2x"/>
                                    </div>
                                    <div>
                                        <p style={{margin: 0}}><strong>Email me at</strong></p>
                                        <p style={{margin: 0}}><div>gordomacmaster@gmail.com</div></p>
                                    </div>
                                </div>
                                <div style={{marginTop: '35px'}}>
                                    <div>
                                        <i className="fas fa-map-marker-alt fa-2x"/>
                                    </div>
                                    <div>
                                        <p style={{margin: 0}}><strong>Current Location</strong></p>
                                        <p style={{margin: 0}}><div>Fremont, CA</div></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="contact_form">
                                    <form action="https://formspree.io/gordomacmaster@gmail.com" method="POST">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                    <label htmlFor="name" className="font-weight-bold">Name</label>
                                                    <input name="name" id="name" type="text" className="form-control"
                                                           placeholder="Your name..." value={this.state.name} onChange={this.handleChange}
                                                           style={this.state.errors && this.state.name === ''?
                                                               {color: '#721c24', backgroundColor: '#f8d7da',
                                                                   borderColor: '#f5c6cb'} : null}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                    <label htmlFor="email" className="font-weight-bold">Email
                                                        address</label>
                                                    <input name="_replyto" id="email" type="email"
                                                           className="form-control" placeholder="Your email..."
                                                           style={this.state.errors && this.state.email === ''?
                                                               {color: '#721c24', backgroundColor: '#f8d7da',
                                                                   borderColor: '#f5c6cb'} : null}
                                                           value={this.state.email} onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <label htmlFor="subject"
                                                           className="font-weight-bold">Subject</label>
                                                    <input type="text" name="subject" className="form-control" id="subject"
                                                           placeholder="Your Subject.." value={this.state.subject}
                                                           style={this.state.errors && this.state.subject === ''?
                                                               {color: '#721c24', backgroundColor: '#f8d7da',
                                                               borderColor: '#f5c6cb'} : null}
                                                           onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <label htmlFor="comments"
                                                           className="font-weight-bold">Message</label>
                                                    <textarea name="message" id="message" rows="4"
                                                              className="form-control" placeholder="Your message..."
                                                              value={this.state.message} onChange={this.handleChange}
                                                              style={this.state.errors && this.state.message === ''?
                                                                  {color: '#721c24', backgroundColor: '#f8d7da',
                                                                      borderColor: '#f5c6cb'} : null}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 text-right">
                                                <input type="hidden" name="_next" value="https://gordonmacmaster.com/#contact" />
                                                <input type="submit" className="btn btn-custom" value="Send Message" />
                                                </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

ContactSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default ContactSection;
