import React from 'react'
import styles from '../styles/component_styles'

const Component = React.createClass({
	resize () {
		this.setState({
			height: (765/1200) * window.innerWidth //make this a seperate spacer component?
			//height of background should always be window inner height
			//might make calculating things easier that way too.

			//an even easier way to do this is have fixed properties, and three media queries.
			//honestly yeah.
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
			<div style={{
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

export default Component