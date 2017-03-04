import React from 'react'
import styles from '../styles/component_styles'

const Component = React.createClass({
	resize () {
		this.setState({
			height: (765/1200) * window.innerWidth
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
				...styles.content
			}}>
				{this.props.children}
			</div>
		)
	}
})

export default Component