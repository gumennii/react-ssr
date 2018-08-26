import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <div>Hello</div>
        <button onClick={() => console.log('Clicked')}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default {
  component: Home
}