//  for button
//   '@media (max-width: 450px)': {
//     width: 183/1.5,
//     height: 46/1.5,
//     fontSize: 0.85/1.5 + "em",
//     marginRight: 12.5/1.5
//   }


// #container:hover > #original {
//   animation: clip 0.3s ease forwards
// }

// #container:hover > #button > .svg-inverted-mask > .shape-fill {
//   animation: fill 0.3s ease forwards
// }


// @keyframes clip {
//   from {
//     clip-path: inset(0px 0px 0px 0px),
//   }
//   to {
//     clip-path: inset(0px 0px 0px 187px),
//   }
// }

// @keyframes unclip {
//   from {
//     clip-path: inset(0px 0px 0px 187px),
//   }
//   to {
//     clip-path: inset(0px 0px 0px 0px),
//   }
// }


// @keyframes fill {
//   from {
//     opacity: 0,
//     width: 0%
//   }
//   to {
//     opacity: 1,
//     width: 100%
//   }
// }

// @keyframes unfill {
//   from {
//     width: 100%
//   }
//   to {
//     width: 0%
//   }
// }

const styles = {
  svg_inverted_mask: {
    position: "absolute",
    top: 0,
    left: 0
  },

  text_transparent: {
    fill: "transparent",
  },

  clip_text: {
    fontWeight: "bold"
  },

  mask_shape: {
    fill: "white"
  },

  shape_fill: {
    fill: "white",
    height: "100%",
    animation: "unfill 0.3s ease forwards"
  },

  original: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    height: "46px",
    width: "183px",
    color: "white",
    border: "2px solid white",
    textTransform: "uppercase",
    fontSize: "0.85em",
    fontWeight: "bold",
    overflow: "hidden",
    animation: "unclip 0.3s ease forwards"
  },

  content: {
    margin: "auto",
    color: "white",
  },

  button: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "46px",
    width: "183px",
    border: "2px solid white",
    textTransform: "uppercase",
    fontSize: "0.85em",
    fontWeight: 'bold',
    overflow: "hidden"
  },
  
  container: {
  display: "inline-block",
  width: "183px",
  height: "46px",
  marginRight: "12.5px",
  position: "relative",
  }
}

export default styles