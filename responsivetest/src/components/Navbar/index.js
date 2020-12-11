import React, { Component} from 'react';
import {Row, Col, Button } from 'antd';
import './Navbar.css';
import Logo from '../../Images/logo.png'
import { MenuFoldOutlined } from '@ant-design/icons';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isDropDownVisible: "link-hidden"
        }
    }

    handleDropDown = () =>{
        if(this.state.isDropDownVisible === "link-hidden"){
            this.setState({
                isDropDownVisible: "link-show"
            });
        }else{
            this.setState({
                isDropDownVisible: "link-hidden"
            });
        }
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
                        <div className="mobile-navbar-section">
                            <Row>
                                <Col xs={24}>
                                    <div className="mobile-navbar-content">
                                        <Row>
                                            <Col xs={24}>
                                                <div className="mobile-navbar-image">
                                                        <img src={Logo} />
                                                        <Button onClick={this.handleDropDown}><MenuFoldOutlined /></Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={`${this.state.isDropDownVisible}`}> 
                            <span>Site Links</span>
                            <Button>Home</Button>
                            <Button>About Us</Button>
                            <Button>Insight</Button>
                            <Button>Events</Button>
                            <Button>Contact Us</Button>
                        </div>
                    </Col>
               </Row>
            </div>
        )
    }
}
export default Navbar;