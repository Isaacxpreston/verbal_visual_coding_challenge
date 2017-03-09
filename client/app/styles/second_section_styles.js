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