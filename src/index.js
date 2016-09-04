import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'
import { newSetUser } from './actions/userActions'

const store = configureStore()

store.dispatch(
    newSetUser()
);

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)