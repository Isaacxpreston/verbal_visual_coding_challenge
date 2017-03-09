import React from 'react'
import Radium from 'radium'

import {fade_in, styles} from '../styles/second_section_styles'

const SecondSection = React.createClass({

	scroll () {
		if(window.scrollY >= window.innerHeight) {
			this.setState({
				container: styles.images_visible
			})
		}
		this.setState({
			parallax: - (window.scrollY - (window.innerHeight + 50)) / 5
		})
	},

	componentWillMount () {
		window.addEventListener('scroll', this.scroll)
		this.setState({
			parallax: 0,
			container: styles.images_hidden
		})
	},

  render () {
    return (
			<div style={styles.container}>
				<div style={styles.header}>
					Second Section Header
				</div>
				<div style={this.state.container}>
					<img src={require('../images/lines.png')}
						style= {{top: this.state.parallax, ...styles.lines}} />
					<img src={require('../images/image2.jpg')} style={styles.image} />
				</div>
			</div>
    )
  }
})

export default Radium(SecondSection)