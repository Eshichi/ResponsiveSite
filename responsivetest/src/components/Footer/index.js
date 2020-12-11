import React, { Component} from 'react';
import {Row, Col } from 'antd';
import './Footer.css';

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="footer-container">
                <Row>
                    <Col>
                        <div className="footer-section">
                            <Row>
                                <Col>
                                    <div className="footer-section">
                                        
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
export default Footer;