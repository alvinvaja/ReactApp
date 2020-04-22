import React, { Component } from 'react'
import playstore from '../assets/playstore.svg'
import appsstore from '../assets/appsstore.svg'

class Download extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       miniDesc: "Kamu lapar atau haus",
       bigDesc: "Tenang...ada Hangry! yang siap mengatasi"
    }
  }
  
  render() {
    return (
      <div className="descriptionSection">
        <div className="miniDesc">
          {this.state.miniDesc}
        </div>
        <div className="bigDesc">
          {this.state.bigDesc}
        </div>
        <div className="downloadSection">
          <img alt="Playstore" src={playstore} />
          <img alt="Appsstore" src={appsstore} />
        </div>
      </div>
    )
  }
}

export default Download
