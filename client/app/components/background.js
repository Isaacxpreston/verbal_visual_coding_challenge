import React from 'react'
import Radium from 'radium'

import Layer from './layer'
import {fade_in, styles} from '../styles/background_styles'

const Background = React.createClass({
	render() {
		return (
      <Layer zIndex="1">
        <div style={styles.overlay}></div>
        <div style={styles.gradient}>
        </div>
        <img style={styles.image}
        src={require('../images/image1.jpg')} alt="background" />
      </Layer>
		)
	}
})

export default Radium(Background)
  

        
        
