import React, { Component } from 'react'

class Zones extends Component {
  render() {
    return (
      <div>
        <h2><a href="#">{this.props.name}</a></h2>
        <span>10012</span><br />
        <span>10 comments</span>
      </div>
    )
  }
}

export default Zones