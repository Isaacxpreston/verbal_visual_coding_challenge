import React from 'react'
import Radium from 'radium'

import Button from './button'
import {slide_in, slide_up, styles} from '../styles/splash_content_styles'

const SplashContent = () => {
  return (
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
  )
}

export default Radium(SplashContent)