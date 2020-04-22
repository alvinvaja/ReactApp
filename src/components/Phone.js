import React, { Component } from 'react'
import phone from '../assets/phone.svg'

class Phone extends Component {
  render() {
    return (
      <div className="phoneSection">
        <img alt="Phone" src={phone} />
      </div>
    )
  }
}

export default Phone
