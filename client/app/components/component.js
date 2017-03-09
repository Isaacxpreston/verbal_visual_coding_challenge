import React from 'react'
import styles from '../styles/component_styles'

import Radium from 'radium'

const Component = React.createClass({
	resize () {
			this.setState({
				height: window.innerHeight
			})
	},

	componentWillMount () {
			this.setState({
				height: window.innerHeight
			})
			window.addEventListener("resize", this.resize)
	},

	render() {
		return (
			<div style={{
				opacity: this.props.opacity,
				height: this.state.height,
				...styles.content
			}}>
				{this.props.children}
			</div>
		)
	}
})

export default Radium(Component)