import React, { Component } from 'react'
import Comment from './Comment'
import styles from './styles'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comments: [
        {body: 'comment 1', username: 'elnathan', timestamp: '10:30'},
        {body: 'comment 2', username: 'abi', timestamp: '10:45'},
        {body: 'comment 3', username: 'alex', timestamp: '11:00'}
              ]
    }
  }
  
  commentList() {
    return this.state.comments.map((comment, index) => {
      return(
        <li><Comment info={comment} /></li>
      )
    })
  }

  render() {
    const list = this.commentList()
    const style = styles.comment
    return (
      <div style={style.commentBox}>
        <h2>Zone 1 Comments</h2>
        <ul style={style.removeLiBullets}>
          {list}
        </ul>
      </div>
    )
  }
}

export default Comments