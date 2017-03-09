import React from 'react'
import Radium from 'radium'

import Layer from './layer'

import styles from '../styles/navbar_styles'

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
    })
    window.addEventListener("resize", this.resize)
    window.addEventListener("scroll", this.scroll)
	},

	render() {
		return (
        <div style={{
          position: this.state.position,
          top: this.state.top,
          ...styles.wrapper
        }}>
          <div style={styles.header}>
            abc creations
          </div> 
          <div style={styles.hamburger}>
            <svg fill="#103b58" height="36" viewBox="0 0 24 24" width="36">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </div>
        </div>
		)
	}
})

export default Radium(NavBar)
  
