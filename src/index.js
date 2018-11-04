import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from './Containers/MainContainer'
import store from './Store/store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import './Styles/App.css'
import './Styles/font-awesome.css'
ReactDOM.render(
<Provider store={store}>
    <MainContainer />
</Provider>, document.getElementById('root'))
registerServiceWorker()
