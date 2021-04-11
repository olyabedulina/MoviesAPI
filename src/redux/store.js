import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [
    thunk
]

// TODO: add check for dev mode
middlewares.push(createLogger({
    collapsed: true
}))

const store = createStore(rootReducer, undefined, applyMiddleware(...middlewares))

export default store
