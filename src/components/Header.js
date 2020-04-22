import React, { Component } from 'react'
import logo from '../assets/hangry.svg'
import sandwich from '../assets/sandwich.svg'
import Navbar from './Navbar';

class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       width: window.innerWidth
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSize);
  }
  
  handleWindowSize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const MOBILE_BREAKPOINT = 800
    const isMobile = this.state.width <= MOBILE_BREAKPOINT
    if(isMobile) {
      return (
        <div className="headerSection">
          <img alt="Hangry Logo" src={logo} />
          <img alt="Sandwich Button" src={sandwich} />
        </div>
      )
    } else {
      return (
        <div className="headerSection">
          <img alt="Hangry Logo" src={logo} />
          <Navbar  />
        </div>
      )
    }
  }
}

export default Header

