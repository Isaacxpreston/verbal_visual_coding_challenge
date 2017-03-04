import React from 'react'
import styles from '../styles/layer_styles'

const Layer = React.createClass({
	render() {
		return (
			<div style={{
				zIndex: this.props.zIndex,
				...styles.layer
			}}>
				{this.props.children}
			</div>
		)
	}
})

export default Layer