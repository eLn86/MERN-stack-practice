import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return(
      <div style={{marginBottom: 10}}>
        <span style={{fontSize:20, fontWeight: 400}}>{this.props.info.body}</span> <br />
        
        <span style={{fontWeight: 200}}>{this.props.info.username}</span>
        <span style={{marginLeft: 10, marginRight: 10}}>|</span>
        {this.props.info.timestamp}
      </div>
    )
  }
}

export default Comment