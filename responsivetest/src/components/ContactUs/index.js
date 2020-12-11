import React, { Component} from 'react';
import {Row, Col, Button } from 'antd';
import './ContactUs.css';

class ContactUs extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="contact-container">
                <Row>
                    <Col xs={24}>
                        <div className="contact-section">
                        <Row>
                            <Col xs={24}>
                                <div className="contact-content">
                                    <span>Our Commitment to Professionals</span>
                                    <span>We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insigths and</span>
                                    <span>experienced distribution. we are laser focused on our shared goal</span>
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <div className="contact-button">
                                    <Button>Contact Us</Button>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ContactUs;