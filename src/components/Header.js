import React, { Component } from 'react'
import logo from '../assets/hangry.svg'
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          alt="Hangry Logo"
          src={logo}
        />
        <Navbar />
      </div>
    )
  }
}

export default Header

