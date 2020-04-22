import React, { Component } from 'react'

class Navbar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       navbar: ['Tentang Kami', 'Semua Outlet', 'Promo', 'Karier', 'Download App']
    }
  }
  
  render() {
    return (
      <div className="navbar">
        {this.state.navbar.map((nav, index) => <div className="navbarList" key={index}>{nav}</div> )}
      </div>
    )
  }
}

export default Navbar
