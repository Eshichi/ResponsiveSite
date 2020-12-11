import React, { Component} from 'react';
import {Row, Col } from 'antd';
import './Navbar.css';
import Logo from '../../Images/logo.png'

class Navbar extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="navbar-container">
               <Row>
                    <Col xs={24}>
                        <div className="navbar-section">
                            <Row>
                                <Col xs={10}>
                                    <div>
                                        <Row>
                                            <Col xs={10}>
                                                <div className="navbar-logo">
                                                    <img src={Logo} />
                                                </div>
                                            </Col>
                                            <Col xs={14}>
                                                <div className="navbar-title">
                                                    <span>Research Professional</span>
                                                    <span>Platform</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={14}>
                                    <div className="navbar-items">
                                        <Row>
                                            <Col flex={5}>
                                                <span>Home</span>
                                                <span>About Us</span>
                                                <span>Insights</span>
                                                <span>Events</span>
                                                <span>Contact Us</span>
                                            </Col>
                                        </Row>
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
export default Navbar;