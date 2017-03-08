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
		if (!this.props.rezise) {
			this.setState({
				height: "auto"
			})
		}
		if (this.props.resize) {
			window.addEventListener("resize", this.resize)
			this.resize()
		}
	},

	render() {
		return (
			<div id={this.props.id} style={{
				opacity: this.props.opacity,
				height: this.state.height,
				background: this.props.background,
				padding: this.props.padding,
				...styles.content
			}}>
				{this.props.children}
			</div>
		)
	}
})

export default Radium(Component)