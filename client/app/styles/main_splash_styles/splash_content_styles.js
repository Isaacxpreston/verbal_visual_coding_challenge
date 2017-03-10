import Radium from 'radium'

export const slide_in = Radium.keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-100%)"
  },
  "100%": {
    opacity: 1,
    transform: "none"
  }
})

export const slide_up = Radium.keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(100%)"
  },
  "100%": {
    opacity: 1,
    transform: "none"
  }
})

export const styles = {
  
  splash: {
    marginTop: "10em",
    marginBottom: "auto",
    marginLeft: "auto",
    '@media handheld, screen and  (max-width: 1000px)': {
      marginLeft: "auto",
      marginRight: "auto"
    },
    '@media handheld, screen and  (max-height: 520px)': {
      marginTop: "2.5em",
    }
  },
  
  header: {
    fontSize: "3em",
    opacity: 0,
    textTransform: "uppercase",
    animation: "x 0.8s ease forwards",
    animationName: slide_in,
    color: "white",
    '@media handheld, screen and  (max-width: 450px)': {
      fontSize: "2em"
    },
    '@media handheld, screen and  (max-height: 380px)': {
      fontSize: "1.5em"
    }
  },
  subheader: {
    opacity: 0,
    animation: "x 0.8s ease forwards",
    animationName: slide_in,
    fontSize: "0.85em",
    color: "white"
  },
  button_wrapper: {
    opacity: 0,
    animation: "x 0.8s ease forwards",
    animationName: slide_up,
  },
  boldface: {
    fontWeight: "bold",
    color: "white"
  }
}