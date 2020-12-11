import React, { Component} from 'react';
import {Row, Col } from 'antd';
import './Intro.css';

class Intro extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="intro-container">
                <div className="intro-design-background"> 
                    <Row>
                        <Col xs={24}>
                            
                            <div className="intro-section">
                                <Row>
                                    <Col xs={24}>
                                        
                                        <div className="intro-content">
                                            <span>ACME Wealth</span>
                                            <span>Management Platforms</span>
                                            <span>Investment excellence.</span>
                                            <span>Divercity of thoughts.</span>
                                            <span>Organization strength.</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Intro;