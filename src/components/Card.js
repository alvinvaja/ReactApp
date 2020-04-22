import React, { Component } from 'react'
import Right from '../assets/arrow-right.svg'

class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       card: this.props.item
    }
  }

  render() {
    const item = this.state.card
    return (
      <div className="cardSection">
        <div className="cardImage">
          <img alt="Product" src={item.src} />
        </div>
        <div className="cardDescSection">
          <div className="cardTitle">
            {item.name}
            <img alt="Navigation" src={Right} />
          </div>
          <div className="cardDesc">
            {item.type} - {item.location}
          </div>
        </div>
      </div>
    )
  }
}

export default Card
