import React, { Component} from 'react';
import {Row, Col ,Card } from 'antd';
import './Insight.css';

class Insight extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="insight-container">
                <Row>
                    <Col xs={24}>
                        <div className="insight-section">
                            <Row>
                                <Col xs={24}>
                                    <div className="insight-title">
                                        <span>ACME Insights</span>
                                        <span>How are factors being used around the world?</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24}>
                                    <div className="insight-section">
                                    <Row>
                                        <Col xs={8}>
                                            <div className="insight-cards insight-cards-one">
                                                <Card
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                                >
                                                    <div className="insight-card-one">
                                                        <span>Global Factor</span>
                                                        <span>Investing Study</span>
                                                    </div>
                                                </Card>
                                            </div>
                                        </Col>
                                        <Col xs={8}>
                                            <div className="insight-cards insight-cards-two">
                                                <Card
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                                >
                                                     <div className="insight-card-two">
                                                        <span>2019</span>
                                                        <span>Outlook</span>
                                                    </div>
                                                </Card>
                                            </div>
                                        </Col>
                                        <Col xs={8}>
                                            <div className="insight-cards insight-cards-three">
                                                <Card
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                                >
                                                     <div className="insight-card-three">
                                                        <span>Capital Market</span>
                                                        <span>Assumptions</span>
                                                    </div>
                                                </Card>
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
export default Insight;