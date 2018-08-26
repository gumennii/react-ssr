import React from 'react'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { hydrate } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import routes from './routes'

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'))