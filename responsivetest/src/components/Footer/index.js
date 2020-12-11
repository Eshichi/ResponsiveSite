import React, { Component} from 'react';
import {Row, Col } from 'antd';
import './Footer.css';
import {  TwitterOutlined, FacebookOutlined , LinkedinOutlined, MailOutlined} from '@ant-design/icons';

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="footer-container">
                <Row>
                    <Col xs={24}>
                        <div className="footer-section">
                            <Row>
                                <Col xs={12}>
                                        <div className="footer-contact">
                                            <span>Call us at 1111-222-333</span>
                                            <span>for more information</span>
                                        </div>
                                </Col>
                                <Col xs={12}>
                                        <div className="footer-social">
                                            <span>Social Share</span>
                                            <TwitterOutlined />
                                            <FacebookOutlined />
                                            <LinkedinOutlined />
                                            <MailOutlined />
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