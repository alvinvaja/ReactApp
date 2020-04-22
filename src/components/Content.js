import React, { Component } from 'react'
import Download from './Download'
import Phone from './Phone'

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Download />
        <Phone />
      </div>
    )
  }
}

export default Content
