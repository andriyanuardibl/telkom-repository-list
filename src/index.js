import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import store from './redux/store'
import reportWebVitals from './reportWebVitals'

import 'antd/lib/style/index.less' // antd core styles
import './@kit/vendors/antd/themes/default.less' // default theme antd components
import './@kit/vendors/antd/themes/dark.less' // dark theme antd components
//import './global.scss' // app & third-party component styles

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
