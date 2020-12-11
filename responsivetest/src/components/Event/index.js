import React, { Component} from 'react';
import {Row, Col } from 'antd';
import './Event.css';
import EventCard from './EventCard/EventCard'

class Event extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="event-container">
                <Row>
                    <Col xs={24}>
                        <div className="event-section">
                            <Row>
                                <Col xs={24}>
                                    <div className="event-content">
                                        <Row>
                                            <Col xs={24}>
                                                <div className="event-title">
                                                    <span>Upcoming Events</span>
                                                    <span>This needs a great tagline, but I'll fill it in later</span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={8}>
                                                <EventCard month="Jan" date="1" title="Insight title one" description="something writter here one" location="Chicago, IL" />
                                            </Col>
                                            <Col xs={8}>
                                                <EventCard month="Fev" date="12" title="Insight title two" description="something writter here two" location="The Wagner, NYC" />
                                            </Col>
                                            <Col xs={8}>
                                                <EventCard month="May" date="6" title="Insight title three" description="something writter here three " location="London, England" />
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
export default Event;