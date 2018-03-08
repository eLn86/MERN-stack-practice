import React, { Component } from 'react'
import Zone from '../presentation/Zone'

class Zones extends Component {
  constructor() {
    super()
    this.state = {
      zoneList: [
        {name: 'Zone 1', zipCode: '10012', numComments: 10},
        {name: 'Zone 2', zipCode: '10013', numComments: 20},
        {name: 'Zone 3', zipCode: '10014', numComments: 30},
        {name: 'Zone 4', zipCode: '10015', numComments: 40}
      ]
    }
  }
  
  listItems() {
    return this.state.zoneList.map((zone, index) => {
      return (
      <li><Zone info={zone} /></li>
      )
    })
  }

  render() {
    const list = this.listItems()
    return (
      <div>
        <ol>
          {list}
        </ol>
      </div>
    )
  }
}

export default Zones