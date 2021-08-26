/*
    Filename    : App.js
    Folder      : src
    Author      : Andri Yanuardi
    Date Create : August 25, 2021 23:17
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Card } from 'antd'
import { GithubRepositoryList } from './redux/actions'
import List from './components/list'
import 'antd/dist/antd.css'
import './App.css'

const { TabPane } = Tabs

const mapStateToProps = (state) => {
    return {
        sucGithubRepositoryList: state.GithubRepositoryList.sucGithubRepositoryList,
        errGithubRepositoryList: state.GithubRepositoryList.errGithubRepositoryList,
    }
}
class App extends Component {
    constructor(props) {
        super(props)

        // State
        //this.state = {}
    }

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(GithubRepositoryList())
    }

    handleTabChange = () => {
        console.log('Tabs')
    }

    render() {
        const { sucGithubRepositoryList } = this.props

        //console.log('sucGithubRepositoryList : ', sucGithubRepositoryList)

        return (
            <div className="site-card-border-less-wrapper">
                <Card title="Github Repository List" bordered={false} style={{ width: '80%' }}>
                    <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
                        <TabPane tab="Overview" key="1" >
                            <List page={{ value: 1 }} data={sucGithubRepositoryList}/>
                        </TabPane>
                        <TabPane tab="Rpositories" key="2">
                            <List page={{ value: 2 }} data={sucGithubRepositoryList}/>
                        </TabPane>
                        <TabPane tab="Projects" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Packages" key="4">
                            Content of Tab Pane 4
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(App)