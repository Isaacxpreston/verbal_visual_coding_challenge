import React from 'react'
import Radium from 'radium'

import Component from './component'
import Arrow from './arrow'

const styles = {
  splash: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    '@media (max-width: 800px)': {
      margin: "auto"
    }
  },
  button: {
    border: "2px solid white",
    fontSize: "0.85em",
    fontWeight: "bold",
    background: 'none',
    marginRight: "12.5px",
    textTransform: "uppercase",
    color: "white",
    width: "183px",
    height: "46px",
    '@media (max-width: 450px)': {
      width: 183/1.5,
      height: 46/1.5,
      fontSize: 0.85/1.5 + "em",
      marginRight: 12.5/1.5
    }
  },
  header: {
    fontSize: "3em",
    textTransform: "uppercase",
    color: "white",
    '@media (max-width: 450px)': {
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
  render () {
    return ( //this always needs to have 50px padding or margin on top for navbar to live
      <Component resize>
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
            <button style={styles.button}>our process</button>
            <button style={styles.button}>our products</button>
          </div>
        </div>

        <Arrow />
        
      </Component>
    )
  }
})
export default Radium(MainSplash)