import React from 'react'
import styles from '../styles/component_styles'
import Radium from 'radium'

import Layer from './layer'

const NavBar = React.createClass({
	scroll () {
    if(this.top === 0) {
      return
    }
		this.setState({
      top: 0
      //this needs to be set to top, and relative to background image size.
      //then triggered when window reaches it
      //not immediately visible at botom
		})
	},

	componentWillMount () {
    this.setState({
      top: (765/1200) * window.innerWidth
      //put this in redux, now in multiple places
      //then no longer need multiple listeners and handlers
      //just add a global listener for resize and update store  
    })

    // window.addEventListener("scroll", this.scroll)
    //animation forwards from absolute to fixed
    //needs resize listeners in case resized and not scrolled, then scrolled.
    //possibly relative padding and other things too based on window height.
      //or percentages.
	},

	render() {
		return (
      <Layer zIndex="3">
        <div style={{
          display: "flex",
          height: "50px",
          position: "absolute",
          top: this.state.top,
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

export default Radium(NavBar)
  
