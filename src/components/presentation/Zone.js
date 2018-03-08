import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
  
  render() {
    const style = styles.zone

    return (
      <div style= {style.container}>
        <h2 style= {style.header}>
          <a style= {style.link}
               href="#">{this.props.info.name}
          </a>
        </h2>
        <span className="detail">{this.props.info.zipCode}</span><br />
        <span className="detail">{this.props.info.numComments} comments</span>
      </div>
    )
  } 
}

export default Zone