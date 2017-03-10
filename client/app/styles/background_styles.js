import Radium from 'radium'

export const fade_in = Radium.keyframes({
  "0%": {
    background: "rgba(0, 0, 0, 1)"
  },
  "100%": {
    background: "rgba(0, 0, 0, 0.5)"
  }
})

export const styles = {
  image: {
    zIndex: "2",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    '@media handheld, screen and  (max-width: 1200px)': {
      width: 1200,
    }
  },
  gradient: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "3",
    background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0, 0, 128, 0.85) 100%)",
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "4",
    background: "rgba(0, 0, 0, 1)",
    animation: "x 1s ease forwards",
    animationName: fade_in,
    animationDelay: "0.25s",
    width: "100%",
    height: "100%"
  }
}