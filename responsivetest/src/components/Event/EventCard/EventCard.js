import React, { Component} from 'react';
import {Row, Col , Button } from 'antd';
import './EventCard.css';

class EventCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="eventcard-container">
                <Row>
                    <Col xs={24}>
                        <div className="eventcard-section">
                            <Row>
                                <Col xs={24}>
                                    <div className="eventcard-content">
                                        <Row>
                                            <Col xs={3} offset={2}>
                                                <div className="eventcard-content-date">
                                                    <span>{this.props.month}</span>
                                                    <span>{this.props.date}</span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={24}>
                                                <div className="eventcard-content-title">
                                                    <span>{this.props.title}</span>
                                                    <span>{this.props.description}</span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={24}>
                                                <div className="eventcard-content-button">
                                                    <Button>Get More Insight</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={20} offset={4}>
                                                <div className="eventcard-content-location">
                                                    <span>{this.props.location}</span>
                                                </div>
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
export default EventCard;