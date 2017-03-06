import React from 'react'
import styles from '../styles/component_styles'

import Radium from 'radium'

const Component = React.createClass({
	resize () {
		// if(window.innerWidth > 960) {
		// 	this.setState({
		// 		height: (765/1200) * window.innerWidth //make this a seperate spacer component?
		// 	})
		//} else {
			this.setState({
				height: window.innerHeight
			})
		//}

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

//an iphone 5s is 340 wide