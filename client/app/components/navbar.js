import React from 'react'
import styles from '../styles/component_styles'
import Radium from 'radium'

import Layer from './layer'

const NavBar = React.createClass({
  
  resize () {
    if(this.state.position === "absolute") {
      this.setState({
        top: window.innerHeight
      })
    } else {
      this.setState({
        top: 0
      })
    }
	},

	scroll () {
    if(window.scrollY >= window.innerHeight) {
      this.setState({
        position: "fixed",
        top: 0
      })
    } else {
      this.setState({
        position: "absolute",
        top: window.innerHeight
      })
    }
	},

	componentWillMount () {
    this.setState({
      top: window.innerHeight,
      position: "absolute"
      //set fade in animation names and stuff too
    })
    window.addEventListener("resize", this.resize)
    window.addEventListener("scroll", this.scroll)
	},

	render() {
		return (
      <Layer zIndex="3">
        <div style={{
          display: "flex",
          height: "50px",
          position: this.state.position,
          top: this.state.top,
          width: "100%",
          background: "white",
          fontSize: "1.85em",
          textTransform: "uppercase",
          boxShadow: "0px 1.5px 1.5px rgba(16, 59, 88, 0.3)"
        }}>
          <div style={{
            margin: "auto",
            paddingLeft: "2em",
            flex: 1,
            '@media (max-width: 330px)': {
              paddingLeft: "0.5em"
            }
            
            }}>
            abc creations
          </div> 
          <div style={{
            margin: "auto",
            paddingRight: "2em",
            '@media (max-width: 330px)': {
              paddingRight: "0.5em"
            }
            }}>
            <svg fill="#103b58" height="36" viewBox="0 0 24 24" width="36">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </div>
        </div>
      </Layer>
		)
	}
})

export default Radium(NavBar)
  
