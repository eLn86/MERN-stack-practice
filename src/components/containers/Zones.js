import React, { Component } from 'react'
import Zone from '../presentation/Zone'

class Zones extends Component {
  constructor() {
    super()
    this.state = {
      zoneName: '',
      zipCodes: '',
      zoneList: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/zone')
    .then(response => response.json())
    .then(data => {
      let updatedList = Object.assign([], this.state.zoneList)
      data.results.forEach(zone => updatedList.push(zone))
      this.setState({
        zoneList: updatedList
      })
    })
  }

  updateZoneName(zone) {
    this.setState({
      zoneName: zone
    })
  }

  updateZip(zip) {
    this.setState({
      zipCodes: zip
    })
  }

  handleChange(e) {
    const field = (e.target.placeholder).toLowerCase()
    const fieldValue = e.target.value
    switch(field) {
      case 'zone':
      this.updateZoneName(fieldValue)
      break
      case 'zip code':
      this.updateZip(fieldValue)
      break
    }
  }

  submitZone() {
    const zoneName = this.state.zoneName
    const zip = this.state.zipCodes
    let updatedList = Object.assign([], this.state.zoneList)
    let lastNumOfComments
    if(updatedList.length !== 0 && updatedList[updatedList.length-1].numComments === undefined) {
      lastNumOfComments = 0
    } else if(updatedList.length !== 0 && updatedList[updatedList.length-1].numComments !== undefined) {
      lastNumOfComments = updatedList[updatedList.length-1].numComments + 10
    } else {
      lastNumOfComments = 0
    }

    const newObject = {zoneName: zoneName, zipCodes: zip, numComments: lastNumOfComments}
    updatedList.push(newObject)
    this.setState({
      zoneName: '',
      zipCodes: '',
      zoneList: updatedList 
    })
  }

  listItems() {
    return this.state.zoneList.map((zone, index) => {
      return (
      <li key={index}><Zone info={zone} /></li>
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
        
        <input className="form-control" 
               type="text" 
               placeholder="Zone"
               value= {this.state.zoneName}
               onChange={(e) => this.handleChange(e)}/> <br />
        <input className="form-control" 
               type="text" 
               placeholder="Zip Code"
               value= {this.state.zipCodes} 
               onChange={(e) => this.handleChange(e)}/> <br />
        <button className="btn btn-danger" 
                onClick={() => this.submitZone()}>Submit</button>
      </div>
    )
  }
}

export default Zones