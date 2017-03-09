import React from 'react'
import Radium from 'radium'
import {fade_in, bounce, styles} from '../styles/arrow_styles'

const Arrow = React.createClass({
  scroll () {
    if(window.scrollY < window.innerHeight) {
      window.scrollTo(0, window.scrollY + 50)
      requestAnimationFrame(this.scroll)
    }
  },

  updateOpacity () {
    this.setState({
      opacity: (window.innerHeight - (window.scrollY * 1.5)) / window.innerHeight
    })
  },

  componentWillMount () {
    this.setState({
      opacity: (window.innerHeight - (window.scrollY * 1.5)) / window.innerHeight
    })
    window.addEventListener('scroll', this.updateOpacity)
  },

  render () {
    return (
      <div style={{opacity: this.state.opacity, ...styles.wrapper}}
      onClick={this.scroll}>
        <svg 
          width="0.125in" height="0.653in"
          style={styles.svg}>
          <path fillRule="evenodd"  fill="rgb(255, 255, 255)"
          d="M4.496,46.992 L8.986,36.151 L6.054,37.363 C6.054,22.040 6.054,16.753 6.054,1.433 C6.054,-0.509 2.946,-0.509 2.946,1.433 C2.946,16.751 2.946,22.037 2.946,37.357 L0.014,36.128 L4.496,46.992 Z"/>
        </svg>
      </div>
    )
  }
})       

export default Radium(Arrow)
       
