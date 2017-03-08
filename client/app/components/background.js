import React from 'react'
import styles from '../styles/component_styles'
import Radium from 'radium'

import Layer from './layer'

//add background cover css property

const Background = React.createClass({

	render() {
		return (
      <Layer zIndex="1">
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "4",
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%"
        }}></div>
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "3",
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0, 0, 128, 0.85) 100%)",
          width: "100%",
          height: "100%"
        }}>
        </div>
        <img style={{
          zIndex: "2",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          '@media (max-width: 1200px)': {
            width: 1200,
          }
        }}
        src={require('../images/image1.jpg')} alt="background" />
      </Layer>
		)
	}
})

export default Radium(Background)
  

        
        
