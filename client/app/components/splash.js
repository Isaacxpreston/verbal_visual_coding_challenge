import React from 'react'
import Radium from 'radium'

import Component from './component'

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
    return (
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

        <div style={{
          margin: "auto",
        }}
        onClick={() =>{
          var y = document.getElementById("content").getBoundingClientRect().top + window.scrollY
          window.scrollTo(0, y)  //do this on scroll too. 
        }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="0.125in" height="0.653in">
            <path fillRule="evenodd"  fill="rgb(255, 255, 255)"
            d="M4.496,46.992 L8.986,36.151 L6.054,37.363 C6.054,22.040 6.054,16.753 6.054,1.433 C6.054,-0.509 2.946,-0.509 2.946,1.433 C2.946,16.751 2.946,22.037 2.946,37.357 L0.014,36.128 L4.496,46.992 Z"/>
          </svg>
        </div>
        
      </Component>
    )
  }
})
export default Radium(MainSplash)