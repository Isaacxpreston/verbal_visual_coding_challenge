import Radium from 'radium'

export const fade_in = Radium.keyframes({
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
})

export const bounce = Radium.keyframes({
  "0%": {
    paddingTop: "0px"
  },
  "50%": {
    paddingTop: "45px"
  },
  "100%": {
    paddingTop: "0px"
  }
})

export const styles = {
  svg: {
    opacity: 0,
    animation: "x 1s ease forwards",
    animationName: fade_in,
    animationDelay: "3.5s"
  },
  wrapper: {
    margin: "auto",
    transition: "transform 0.3s",
    animation: "x 1.25s linear infinite",
    ":hover": {
      animationName: bounce,
      transform: "scale(2, 1.75)"
    }
  }
}