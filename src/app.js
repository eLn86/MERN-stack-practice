import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Zone from './components/Zone'

class App extends Component {
  render() {
    return (
      <div>
        <ol>
          <li><Zone name="Zone 1"/></li>
          <li><Zone name="Zone 2"/></li>
          <li><Zone name="Zone 3"/></li>
          <li><Zone name="Zone 4"/></li>
        </ol>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
