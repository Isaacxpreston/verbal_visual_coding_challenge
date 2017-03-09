import React from 'react'
import Component  from './component'
import Radium from 'radium'

const fadeIn = Radium.keyframes({
	'0%': {
		opacity: 0
	},
	'100%': {
		opacity: 1
	}
})

const styles = {
	images_hidden: {
		position: "relative",
		margin: "auto",
		width: "100%",
		height: "459px",
		opacity: 0,
	},
	images_visible: {
		position: "relative",
		margin: "auto",
		width: "100%",
		height: "459px",
		opacity: 0,
		animation: "x 0.5s linear forwards",
		animationName: fadeIn,
	}
}

const SecondSection = React.createClass({
	scroll () {
		if(window.scrollY >= window.innerHeight) {
			this.setState({
				container: styles.images_visible
			})
		}
		this.setState({
			parallax: - (window.scrollY - (window.innerHeight + 50)) / 7.5
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
			//media query component margins around 1120px
			//fix padding for media queries
			<div style={{
				display: "flex",
				flexDirection: "column",
				background: "white",
				paddingTop: "7.5em",
				paddingLeft: "1em",
				paddingRight: "1em",
			}}>
				<div style={{
					margin: "auto",
					paddingBottom: "1.25em",
					fontSize: "1.85em",
					'@media (max-width: 550px)': {
						paddingBottom: 0,
						fontSize: "1.5em"
					}
				}}>
					Second Section Header
				</div>

				<div style={this.state.container}>
					<img src={require('../images/lines.png')} style= {{
						zIndex: 2,
						position: "absolute",
						margin: "auto",
						maxWidth: "100%",
						top: this.state.parallax,

						left: 0,
						bottom: 0,
						right: 0,
					}} />
					<img src={require('../images/image2.jpg')} style={{
						zIndex: 1,
						position: "absolute",
						margin: "auto",
						maxWidth: "100%",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
					}} />
				</div>
			</div>
    )
  }
})

export default Radium(SecondSection)