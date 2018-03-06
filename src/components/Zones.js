import React, { Component } from 'react'

class Zones extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>{this.props.name}</li>
          <li>{this.props.name}</li>
          <li>{this.props.name}</li>
          <li>{this.props.name}</li>
        </ol>
      </div>
    )
  }
}

export default Zones