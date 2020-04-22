import React, { Component } from 'react'
import Download from './Download'
import Phone from './Phone'
import Product from './Product'

class Content extends Component {
  render() {
    return (
      <div className="contentSection">
        <div className="content">
          <Download />
          <Phone />
        </div>
        <div className="product">
          <Product />
        </div>
      </div>
    )
  }
}

export default Content
