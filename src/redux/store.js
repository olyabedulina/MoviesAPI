import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [
    thunk
]

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

// TODO: add check for dev mode
middlewares.push(createLogger({
    collapsed: true
}))

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store
