import React from 'react'
import Radium from 'radium'

import Component from './component'
import Arrow from './arrow'
import Button from './button'

const slide_in = Radium.keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-100%)"
  },
  "100%": {
    opacity: 1,
    transform: "none"
  }
})

const slide_up = Radium.keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(100%)"
  },
  "100%": {
    opacity: 1,
    transform: "none"
  }
})

const styles = {
  
  splash: {
    marginTop: "10em",
    marginBottom: "auto",
    marginLeft: "auto",
    '@media (max-width: 1000px)': {
      marginLeft: "auto",
      marginRight: "auto"
    },
    '@media (max-height: 520px)': {
      marginTop: "2.5em",
    }
  },
  
  header: {
    fontSize: "3em",
    opacity: 0,
    textTransform: "uppercase",
    animation: "x 0.8s ease forwards",
    animationName: slide_in,
    color: "white",
    '@media (max-width: 450px)': {
      fontSize: "2em"
    },
    '@media (max-height: 380px)': {
      fontSize: "1.5em"
    }
  },
  subheader: {
    opacity: 0,
    animation: "x 0.8s ease forwards",
    animationName: slide_in,
    fontSize: "0.85em",
    color: "white"
  },
  button_wrapper: {
    opacity: 0,
    animation: "x 0.8s ease forwards",
    animationName: slide_up,
  },
  boldface: {
    fontWeight: "bold",
    color: "white"
  }
}

const MainSplash = React.createClass({

  updateScroll () {
    this.setState({
      scroll: (window.innerHeight - (window.scrollY * 1.5)) / window.innerHeight
    })
  },

  componentWillMount () {
    this.setState({
      scroll: (window.innerHeight - (window.scrollY * 1.5)) / window.innerHeight
    })
    window.addEventListener('scroll', this.updateScroll)
  },

  render () {
    return (
      //fix component
      <Component opacity={this.state.scroll} resize>
        <div style={styles.splash}>
          <div style={{...styles.header, animationDelay: "0.25s"}}>
            from <span style={styles.boldface}> factory </span>
          </div>
          <div style={{marginTop: "-5px", ...styles.header, animationDelay: "1s"}}>
            to <span style={styles.boldface}> store </span>
          </div>
          <div style={{marginTop: "-5px", ...styles.header, animationDelay: "1.75s"}}>
            to <span style={styles.boldface}> out the door. </span>
          </div>
          <div style={{marginTop: "15px", marginBottom: "5px", ...styles.subheader, animationDelay: "2.5s"}}>
            ABC Creations offers
            <span style={styles.boldface}> international end-to-end apparel</span>
          </div>
          <div style={{marginBottom: "20px", ...styles.subheader, animationDelay: "2.5s"}}>
            manufacturing solutions for forward thinking clothing brands.
          </div>
          <div style={{...styles.button_wrapper, animationDelay: "2.5s"}}>
            <Button>our process</Button>
            <Button>our products</Button>
          </div>
        </div>

        <Arrow />
        
      </Component>
    )
  }
})
export default Radium(MainSplash)