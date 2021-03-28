import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import domReady from 'document-ready-promise'

import './styles.css'
import store from './redux/store'
import App from './components/App'

const run = () => {
    const appPlaceholder = document.createElement('div')
    document.body.appendChild(appPlaceholder)

    render(<Provider store={store}>
        <App/>
    </Provider>, appPlaceholder)
}

domReady().then(run)
