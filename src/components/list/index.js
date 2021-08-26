import React, { Component } from 'react'
import { PageHeader, Dropdown, Menu, Card, Row, Col, Button, Typography, Input } from 'antd'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { CaretRightOutlined, DownOutlined } from '@ant-design/icons'
import Loading from './loading'

const { Paragraph } = Typography;

const menu_type = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                All
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                Source
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                Forks
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                Archieves
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                Mirrors
            </a>
        </Menu.Item>
    </Menu>
)

const menu_language = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                All
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                HTML
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Javascript
            </a>
        </Menu.Item>
    </Menu>
)

const menu_sort = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                Last updated
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Name
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Stars
            </a>
        </Menu.Item>
    </Menu>
)

const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
)

class List extends Component {
    render() {
        const { page, data } = this.props

        return (
            <Router>
                <Switch>
                    {
                        page.value === 1 ?
                            <PageHeader
                                title="Popular repositories"
                                className="site-page-header"
                                extra={[
                                    <Button key="3">Customize your pins</Button>
                                ]}
                            >
                                <Row gutter={16}>
                                    {
                                        data ?
                                            data.map((value, index) => (
                                                <Col key={index} className="gutter-row" span={8}>
                                                    <Content>
                                                        <Card style={{ width: '100%', marginTop: 16 }}>
                                                            <Paragraph>
                                                                <h4><Link>{value.name}</Link></h4>
                                                            </Paragraph>
                                                            <Paragraph>
                                                                {value.description}
                                                            </Paragraph>
                                                            <div>
                                                                <Row gutter={16}>
                                                                    <Col className="gutter-row" span={16}>
                                                                        {value.language !== undefined && value.language !== null ? <CaretRightOutlined /> : null}
                                                                        {value.language}
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    </Content>
                                                </Col>
                                            )) : <Loading />
                                    }
                                </Row>
                            </PageHeader> :
                            <PageHeader
                                title="Popular repositories"
                                className="site-page-header"
                                extra={[
                                    <Dropdown overlay={menu_type} placement="bottomCenter" arrow>
                                        <Button>Type <DownOutlined /></Button>
                                    </Dropdown>,
                                    <Dropdown overlay={menu_language} placement="bottomCenter" arrow>
                                        <Button>Language <DownOutlined /></Button>
                                    </Dropdown>,
                                    <Dropdown overlay={menu_sort} placement="bottomCenter" arrow>
                                        <Button>Sort <DownOutlined /></Button>
                                    </Dropdown>
                                ]}
                            >
                                <Row gutter={16}>
                                    {
                                        data ?
                                            data.map((value, index) => (
                                                <Col key={index} className="gutter-row" span={8}>
                                                    <Content>
                                                        <Card style={{ width: '100%', marginTop: 16 }}>
                                                            <Paragraph>
                                                                <h4><Link>{value.name}</Link></h4>
                                                            </Paragraph>
                                                            <Paragraph>
                                                                {value.description}
                                                            </Paragraph>
                                                            <div>
                                                                <Row gutter={16}>
                                                                    <Col className="gutter-row" span={16}>
                                                                        {value.language !== undefined && value.language !== null ? <CaretRightOutlined /> : null}
                                                                        {value.language}
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    </Content>
                                                </Col>
                                            )) : <Loading />
                                    }
                                </Row>
                            </PageHeader>
                    }
                </Switch>
            </Router>
        )
    }
}

export default List