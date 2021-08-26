import React, { Component } from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

const { Paragraph } = Typography;

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    render() {
        const { loading } = this.state

        return (
            <Row gutter={16}>
                <Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
                    <Paragraph>
                        <h4>name</h4>
                    </Paragraph>
                    <Paragraph>
                        description
                    </Paragraph>
                    <div>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={16}>
                                <CaretRightOutlined /> language
                            </Col>
                        </Row>
                    </div>
                </Card>
                <Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
                    <Paragraph>
                        <h4>name</h4>
                    </Paragraph>
                    <Paragraph>
                        description
                    </Paragraph>
                    <div>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={16}>
                                <CaretRightOutlined /> language
                            </Col>
                        </Row>
                    </div>
                </Card>
                <Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
                    <Paragraph>
                        <h4>name</h4>
                    </Paragraph>
                    <Paragraph>
                        description
                    </Paragraph>
                    <div>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={16}>
                                <CaretRightOutlined /> language
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Row>
        )
    }
}

export default Loading