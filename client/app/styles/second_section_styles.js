import Radium from 'radium'

export const fade_in = Radium.keyframes({
	'0%': {
		opacity: 0
	},
	'100%': {
		opacity: 1
	}
})

export const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		background: "white",
		paddingTop: "7.5em",
		paddingLeft: "1em",
		paddingRight: "1em",
	},
	header: {
		margin: "auto",
		paddingBottom: "1.25em",
		fontSize: "1.85em",
		'@media handheld, screen and  (max-width: 550px)': {
			paddingBottom: 0,
			fontSize: "1.5em"
		}
	},
	lines: {
		zIndex: 2,
		position: "absolute",
		margin: "auto",
		maxWidth: "100%",
		left: 0,
		bottom: 0,
		right: 0,
	},
	image: {
		zIndex: 1,
		position: "absolute",
		margin: "auto",
		maxWidth: "100%",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
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
		animationName: fade_in,
	}
}