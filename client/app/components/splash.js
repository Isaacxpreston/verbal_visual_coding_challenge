import React from 'react'
import Radium from 'radium'

import SplashContent from './splash_content'
import Arrow from './arrow'
import Button from './button'
import styles from '../styles/splash_styles'

const MainSplash = React.createClass({

  resize () {
			this.setState({
				height: window.innerHeight
			})
	},

  updateScroll () {
    this.setState({
      scroll: (window.innerHeight - (window.scrollY * 1.5)) / window.innerHeight
    })
  },

  componentWillMount () {
    this.setState({
      scroll: (window.innerHeight - (window.scrollY * 1.5)) / window.innerHeight,
      height: window.innerHeight
    })
    window.addEventListener('scroll', this.updateScroll)
    window.addEventListener("resize", this.resize)
  },

  render () {
    return (
      <div style={{
        opacity: this.state.scroll,
        height: this.state.height,
        ...styles.wrapper
      }}>
        <SplashContent />
        <Arrow />
      </div>
    )
  }
})
export default Radium(MainSplash)