import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'

ReactDOM.hydrate(<Home />, document.getElementById('root'))

console.log('Hello from Client')