import React from 'react'
import styles from '../styles/component_styles'

import Layer from './layer'

const NavBar = React.createClass({
	scroll () {
    if(this.state.bottom >= window.innerHeight - 50) {
      return
    }
		this.setState({
			bottom: window.innerHeight - 50
      //this needs to be set to top, and relative to background image size.
      //then triggered when window reaches it
      //not immediately visible at botom
		})
	},

	componentWillMount () {
    this.setState({
      bottom: 0
    })

    window.addEventListener("scroll", this.scroll)
	},

	render() {
		return (
      <Layer zIndex="3">
        <div style={{
          display: "flex",
          height: "50px",
          position: "fixed",
          bottom: this.state.bottom,
          width: "100%",
          background: "white",
          fontSize: "1.85em",
          textTransform: "uppercase",
        }}>
          <div style={{
            margin: "auto",
            paddingLeft: "2em",
            flex: 1
            }}>
            abc creations
          </div> 
          <div style={{
            margin: "auto",
            paddingRight: "2em",
            }}>
            <svg fill="#103b58" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </div>
        </div>
      </Layer>
		)
	}
})

export default NavBar	
  
