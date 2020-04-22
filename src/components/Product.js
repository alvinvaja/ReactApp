import React, { Component } from 'react'
import Card from './Card'
import Ayam from '../assets/ayam-koplo.svg'
import SanGyu from '../assets/san-gyu.svg'
import BudeSari from '../assets/bude-sari.svg'
import Kopi from '../assets/kopidaripada.svg'

class Product extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: 'Hangry! adalah restoran dengan beragam brand',
       desc: 'Kami menyajikan beragam brand untuk menemani setiap waktu santapmu',
       product: [
         {
           id: 1,
           name: 'Ayam Koplo',
           type: 'Ayam Geprek',
           location: 'Indonesia',
           src: Ayam
         },
         {
          id: 2,
          name: 'San Gyu',
          type: 'Beef Bowl',
          location: 'Jepang',
          src: SanGyu
        },
        {
          id: 3,
          name: 'Bude Sari',
          type: 'Nasi Ayam',
          location: 'Indonesia',
          src: BudeSari
        },
        {
          id: 4,
          name: 'Kopi Dari|Pada',
          type: 'Minuman',
          location: 'Indonesia',
          src: Kopi
        }
       ]
    }
  }

  render() {
    return (
      <div className="productStyling">
        <div className="productTitle">
          {this.state.title} 
          <br/>
          <div className="productDesc"> 
            {this.state.desc}
          </div>
        </div>
        <div className="productSection">
          {this.state.product.map(item => <Card item={item} key={item.id} />)}
        </div>
      </div>
    )
  }
}

export default Product
