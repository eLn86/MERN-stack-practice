import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      body: '',
      timestamp: '',
      comments: []
    }
  }
  
  componentWillMount() {
    fetch('http://localhost:3000/api/comment')
    .then(response => response.json())
    .then(data => {
      let array = data.results
      for(let i=0;i<array.length;i++) {
        for(let key in array[i]) {
          if(key === 'timestamp') {
            let value = array[i][key].split('T')
                                     .filter(str => str.includes(':'))[0]
                                     .slice(0,5)
            array[i][key] = value
          }
        }
      }
      let updatedList = Object.assign([], this.state.comments)
      array.forEach(comment => updatedList.push(comment))
      this.setState({
        comments: updatedList
      })
    })
  }

  commentList() {
    return this.state.comments.map((comment, index) => {
      return(
        <li key={index}><Comment info={comment} /></li>
      )
    })
  }

  updateUsername(username) {
    this.setState({
      username: username
    })
  }

  updateBody(body) {
    this.setState({
      body: body
    })
  }

  updateTimestamp(timestamp) {
    this.setState({
      timestamp: timestamp
    })
  }

  handleChange(e) {
    const field = (e.target.placeholder).toLowerCase()
    const fieldValue = e.target.value
    switch(field) {
      case 'username':
      this.updateUsername(fieldValue)
      break
      case 'comment':
      this.updateBody(fieldValue)
      break
      case 'timestamp':
      this.updateTimestamp(fieldValue)
      break
    }
  }

  submitComment() {
    const username = this.state.username
    const body = this.state.body
    const timestamp = this.state.timestamp
    let updatedList = Object.assign([], this.state.comments)
    const newObject = {body: body, username: username, timestamp: timestamp}
    updatedList.push(newObject)
    this.setState({
      username: '',
      body: '',
      timestamp: '',
      comments: updatedList 
    })
  }

  render() {
    const list = this.commentList()
    const style = styles.comment
    return (
      <div style={style.commentBox}>
        <h2>Zone 1 Comments</h2> <br />
        <ul style={style.removeLiBullets}>
          {list}
        </ul>

        <input className="form-control" 
               type="text" 
               placeholder="Username"
               value={this.state.username}
               onChange={(e) => this.handleChange(e)}/> <br />
        <input className="form-control" 
               type="text" 
               placeholder="Comment" 
               value={this.state.body}
               onChange={(e) => this.handleChange(e)}/> <br />
        <input className="form-control" 
               type="text" 
               placeholder="Timestamp"
               value={this.state.timestamp} 
               onChange={(e) => this.handleChange(e)}/> <br />
        <button className="btn btn-info" 
                onClick={() => this.submitComment()}>Submit</button>
      </div>
    )
  }
}

export default Comments