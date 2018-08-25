import React from 'react'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import Routes from './Routes'

const store = createStore(reducers, {}, applyMiddleware(thunk))

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'))