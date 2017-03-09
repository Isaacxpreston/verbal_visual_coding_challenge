import React from 'react'
import Radium from 'radium'

import Component from './component'
import Arrow from './arrow'
import Button from './button'

const styles = {
  
  splash: {
    marginTop: "10em",
    marginBottom: "auto",
    marginLeft: "auto",
    '@media (max-width: 1000px)': {
      // marginTop: "2.5em",
      marginLeft: "auto",
      marginRight: "auto"
    },
    '@media (max-height: 520px)': {
      marginTop: "2.5em",
    }
  },
  
  header: {
    fontSize: "3em",
    textTransform: "uppercase",
    color: "white",
    '@media (max-width: 450px)': { //also 330 width for banner and header fonts
      fontSize: "2em"
    },
    '@media (max-height: 380px)': {
      fontSize: "1.5em"
    }
  },
  subheader: {
    fontSize: "0.85em",
    color: "white"
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
      <Component opacity={this.state.scroll} resize>
        <div style={styles.splash}>
          <div style={styles.header}>
            from <span style={styles.boldface}> factory </span>
          </div>
          <div style={{marginTop: "-5px", ...styles.header}}>
            to <span style={styles.boldface}> store </span>
          </div>
          <div style={{marginTop: "-5px", ...styles.header}}>
            to <span style={styles.boldface}> out the door. </span>
          </div>
          <div style={{marginTop: "15px", marginBottom: "5px", ...styles.subheader}}>
            ABC Creations offers
            <span style={styles.boldface}> international end-to-end apparel</span>
          </div>
          <div style={{marginBottom: "20px", ...styles.subheader}}>
            manufacturing solutions for forward thinking clothing brands.
          </div>
          <div>
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