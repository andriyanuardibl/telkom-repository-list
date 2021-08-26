/*
    Filename    : App.js
    Folder      : src
    Author      : Andri Yanuardi
    Date Create : August 25, 2021 23:17
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import { GithubRepositoryList } from './redux/actions'
import 'antd/dist/antd.css'

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

        console.log('sucGithubRepositoryList : ', sucGithubRepositoryList)

        return (
            <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        )
    }
}

export default connect(mapStateToProps)(App)